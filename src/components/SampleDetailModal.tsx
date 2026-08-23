import { type Sample, type Assignee, STATUSES } from '../data';
import { X, Save, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface SampleDetailModalProps {
  sample: Sample;
  onClose: () => void;
  onUpdate: (updates: Partial<Sample>) => void;
}

const TEAM: Assignee[] = ['Shubhashish', 'Daksh', 'Swayam Shree', 'Suman', 'Nuzail', 'Unassigned'];

export function SampleDetailModal({ sample, onClose, onUpdate }: SampleDetailModalProps) {
  const [localSample, setLocalSample] = useState<Sample>({ ...sample });

  const handleChange = (field: keyof Sample, value: string) => {
    setLocalSample(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onUpdate(localSample);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Sample #{sample.slNo} Details</h2>
          <button className="btn-icon" onClick={onClose}><X size={20} /></button>
        </div>
        <div className="modal-body">
          <div className="detail-grid">
            <div className="form-group">
              <label>PVA%</label>
              <input type="text" value={sample.pva} disabled className="input-disabled" />
            </div>
            <div className="form-group">
              <label>SA%</label>
              <input type="text" value={sample.sa} disabled className="input-disabled" />
            </div>
            <div className="form-group">
              <label>rGO conc.</label>
              <input type="text" value={sample.rgo} disabled className="input-disabled" />
            </div>
            <div className="form-group">
              <label>Solvent (Water:EG)</label>
              <input type="text" value={sample.solvent} disabled className="input-disabled" />
            </div>
            
            <div className="form-group">
              <label>Assigned To</label>
              <select 
                value={localSample.assignedTo}
                onChange={e => handleChange('assignedTo', e.target.value)}
              >
                {TEAM.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select 
                value={localSample.status}
                onChange={e => handleChange('status', e.target.value)}
              >
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Slope of I-V (1/R)</label>
              <input 
                type="number" 
                value={localSample.slope}
                onChange={e => handleChange('slope', e.target.value)}
                placeholder="e.g. 0.05"
              />
            </div>
            <div className="form-group">
              <label>Conductivity (S/cm)</label>
              <input 
                type="number" 
                value={localSample.conductivity}
                onChange={e => handleChange('conductivity', e.target.value)}
                placeholder="e.g. 0.002"
              />
            </div>
          </div>
          
          <div className="form-group full-width">
            <label>Notes</label>
            <textarea 
              value={localSample.notes}
              onChange={e => handleChange('notes', e.target.value)}
              placeholder="Any observations..."
              rows={3}
            />
          </div>

          <div className="form-group full-width">
            <label>I-V Graph (URL or Base64)</label>
            <div className="input-with-icon">
              <ImageIcon size={18} />
              <input 
                type="text" 
                value={localSample.graphUrl}
                onChange={e => handleChange('graphUrl', e.target.value)}
                placeholder="Paste image URL here..."
              />
            </div>
            {localSample.graphUrl && (
              <div className="graph-preview">
                <img src={localSample.graphUrl} alt={`I-V Graph for Sample ${sample.slNo}`} onError={(e) => (e.currentTarget.style.display = 'none')} />
              </div>
            )}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}><Save size={16} /> Save Changes</button>
        </div>
      </div>
    </div>
  );
}
