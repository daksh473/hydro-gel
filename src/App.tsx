import { useEffect, useState } from 'react';
import { samplesMap, provider } from './store';
import type { Sample, Assignee } from './data';
import { Dashboard } from './components/Dashboard';
import { DataTable } from './components/DataTable';
import { ProtocolPanel } from './components/ProtocolPanel';
import { SampleDetailModal } from './components/SampleDetailModal';
import { Login } from './components/Login';
import { ChangePasswordModal } from './components/ChangePasswordModal';
import { Activity, Users, LogOut, Key } from 'lucide-react';
import './index.css';

function App() {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [synced, setSynced] = useState(false);
  const [selectedSampleId, setSelectedSampleId] = useState<string | null>(null);
  const [showProtocol, setShowProtocol] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [connectedPeers, setConnectedPeers] = useState(0);

  // Authentication State
  const [currentUser, setCurrentUser] = useState<string | null>(() => sessionStorage.getItem('username'));

  useEffect(() => {
    // Initial load
    const loadData = () => {
      const data = Array.from(samplesMap.values());
      data.sort((a, b) => a.slNo - b.slNo);
      setSamples(data);
    };

    loadData();

    // Listen for changes
    const observer = () => {
      loadData();
    };

    samplesMap.observe(observer);
    
    provider.on('synced', (arg: { synced: boolean }) => {
      setSynced(arg.synced);
    });

    provider.awareness.on('change', () => {
      setConnectedPeers(provider.awareness.getStates().size);
    });

    return () => {
      samplesMap.unobserve(observer);
    };
  }, []);

  const handleLogin = (username: string) => {
    sessionStorage.setItem('username', username);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('username');
    setCurrentUser(null);
  };

  const updateSample = (id: string, updates: Partial<Sample>) => {
    const existing = samplesMap.get(id);
    if (existing) {
      // Auto-assign to current user if it's currently unassigned and they make a change
      if (
        currentUser &&
        existing.assignedTo === 'Unassigned' &&
        (!updates.assignedTo || updates.assignedTo === 'Unassigned')
      ) {
        // Map lowercase username to proper casing for Assignee if possible
        const properName = ['Shubhashish', 'Daksh', 'Swayam Shree', 'Suman', 'Nuzail'].find(n => n.toLowerCase().replace(/\s+/g, '') === currentUser) as Assignee;
        if (properName) {
          updates.assignedTo = properName;
        }
      }
      
      samplesMap.set(id, { ...existing, ...updates, lastUpdatedBy: currentUser || '', lastUpdatedAt: Date.now() });
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
          <div className="status-badge" title="Peers connected">
            <Users size={16} /> {connectedPeers}
          </div>
          <div className={`status-badge ${synced ? 'synced' : 'syncing'}`}>
            <Activity size={16} /> {synced ? 'Synced' : 'Syncing...'}
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
