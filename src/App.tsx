import { useEffect, useState, useRef } from 'react';
import { supabase } from './store';
import { INITIAL_DATA, type Sample, type Assignee } from './data';
import { Dashboard } from './components/Dashboard';
import { DataTable } from './components/DataTable';
import { ProtocolPanel } from './components/ProtocolPanel';
import { SampleDetailModal } from './components/SampleDetailModal';
import { Login } from './components/Login';
import { ChangePasswordModal } from './components/ChangePasswordModal';
import { Activity, LogOut, Key } from 'lucide-react';
import './index.css';

function App() {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [synced, setSynced] = useState(true);
  const [selectedSampleId, setSelectedSampleId] = useState<string | null>(null);
  const [showProtocol, setShowProtocol] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  // We use a ref to avoid stale closures in the realtime subscription
  const samplesRef = useRef<Sample[]>([]);
  samplesRef.current = samples;

  // Authentication State
  const [currentUser, setCurrentUser] = useState<string | null>(() => sessionStorage.getItem('username'));

  useEffect(() => {
    // Initial load
    const loadData = async () => {
      setSynced(false);
      const { data, error } = await supabase.from('samples').select('*').order('slNo', { ascending: true });
      
      if (error) {
        console.error('Error fetching samples:', error);
        setSynced(true);
        return;
      }

      if (data && data.length === 0) {
        // Initialize with default 48 samples if table is empty
        const { error: insertError } = await supabase.from('samples').insert(INITIAL_DATA);
        if (!insertError) {
          setSamples(INITIAL_DATA);
        }
      } else if (data) {
        setSamples(data as Sample[]);
      }
      setSynced(true);
    };

    if (currentUser) {
      loadData();

      // Listen for changes
      const channel = supabase.channel('custom-all-channel')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'samples' },
          (payload) => {
            const updatedSample = payload.new as Sample;
            setSamples(prev => {
              const newSamples = [...prev];
              const index = newSamples.findIndex(s => s.id === updatedSample.id);
              if (index !== -1) {
                newSamples[index] = updatedSample;
              } else {
                newSamples.push(updatedSample);
                newSamples.sort((a, b) => a.slNo - b.slNo);
              }
              return newSamples;
            });
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [currentUser]);

  const handleLogin = (username: string) => {
    sessionStorage.setItem('username', username);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('username');
    setCurrentUser(null);
  };

  const updateSample = async (id: string, updates: Partial<Sample>) => {
    const existingIndex = samplesRef.current.findIndex(s => s.id === id);
    if (existingIndex > -1) {
      const existing = samplesRef.current[existingIndex];
      const payload: Partial<Sample> = { ...updates, lastUpdatedBy: currentUser || '', lastUpdatedAt: Date.now() };
      
      // Auto-assign to current user if it's currently unassigned and they make a change
      if (
        currentUser &&
        existing.assignedTo === 'Unassigned' &&
        (!updates.assignedTo || updates.assignedTo === 'Unassigned')
      ) {
        // Map lowercase username to proper casing for Assignee if possible
        const properName = ['Shubhashish', 'Daksh', 'Swayam Shree', 'Suman', 'Nuzail'].find(n => n.toLowerCase().replace(/\s+/g, '') === currentUser) as Assignee;
        if (properName) {
          payload.assignedTo = properName;
        }
      }

      const newSample = { ...existing, ...payload };

      // Optimistic update
      setSamples(prev => {
        const newArr = [...prev];
        newArr[existingIndex] = newSample;
        return newArr;
      });

      // Update backend
      setSynced(false);
      const { error } = await supabase.from('samples').upsert(newSample);
      if (error) {
        console.error("Error updating sample:", error);
      }
      setSynced(true);
    }
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  const selectedSample = selectedSampleId ? samples.find(s => s.id === selectedSampleId) : null;

  // Format the name nicely for display
  const displayUserName = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-brand">
          <img src="/favicon.png" alt="Icon" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
          <h1>ML Hydrogel Tracker</h1>
        </div>
        <div className="header-actions">
          <div className={`status-badge ${synced ? 'synced' : 'syncing'}`}>
            <Activity size={16} /> {synced ? 'Saved' : 'Saving...'}
          </div>
          <button className="btn btn-secondary" onClick={() => setShowProtocol(true)}>
            View Protocol
          </button>
          <div className="user-menu">
            <span className="logged-in-text">Logged in as <strong>{displayUserName}</strong></span>
            <button className="btn-icon" title="Change Password" onClick={() => setShowChangePassword(true)}>
              <Key size={18} />
            </button>
            <button className="btn-icon text-error" title="Log out" onClick={handleLogout}>
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="app-content">
        <Dashboard samples={samples} />
        <DataTable 
          samples={samples} 
          onRowClick={(id) => setSelectedSampleId(id)} 
          onUpdateSample={updateSample}
        />
      </main>

      {selectedSample && (
        <SampleDetailModal 
          sample={selectedSample}
          onClose={() => setSelectedSampleId(null)}
          onUpdate={(updates) => updateSample(selectedSample.id, updates)}
        />
      )}

      {showProtocol && (
        <ProtocolPanel onClose={() => setShowProtocol(false)} />
      )}

      {showChangePassword && (
        <ChangePasswordModal 
          username={currentUser} 
          onClose={() => setShowChangePassword(false)} 
        />
      )}
    </div>
  );
}

export default App;
