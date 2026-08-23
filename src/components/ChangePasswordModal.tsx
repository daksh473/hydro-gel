import { useState } from 'react';
import { authMap } from '../store';
import { hashPassword } from '../auth';
import { X, Save } from 'lucide-react';

interface ChangePasswordModalProps {
  username: string;
  onClose: () => void;
}

export function ChangePasswordModal({ username, onClose }: ChangePasswordModalProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const currentHash = await hashPassword(currentPassword);
      const expectedHash = authMap.get(username);

      if (currentHash !== expectedHash) {
        setError('Current password is incorrect');
        setLoading(false);
        return;
      }

      if (newPassword.trim().length < 4) {
        setError('New password must be at least 4 characters');
        setLoading(false);
        return;
      }

      const newHash = await hashPassword(newPassword);
      authMap.set(username, newHash);
      
      // Successfully changed
      onClose();
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content change-password-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Change Password</h2>
          <button className="btn-icon" onClick={onClose}><X size={20} /></button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {error && <div className="login-error">{error}</div>}
            
            <div className="form-group">
              <label>Current Password</label>
              <input 
                type="password" 
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>New Password</label>
              <input 
                type="password" 
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              <Save size={16} /> Save New Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
