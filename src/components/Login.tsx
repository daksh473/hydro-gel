import { useState } from 'react';
import { hashPassword, getAuthHash } from '../auth';

interface LoginProps {
  onLogin: (username: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const normalizedUser = username.trim().toLowerCase();
      const expectedHash = getAuthHash(normalizedUser);

      if (!expectedHash) {
        setError(true);
        setLoading(false);
        return;
      }

      const hash = await hashPassword(password);
      if (hash === expectedHash) {
        onLogin(normalizedUser);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-screen">
      <div className="login-logo-container animate-fade-up" style={{ textAlign: 'center', marginBottom: '24px' }}>
        <img src="/logo.png" alt="ML Hydrogel" style={{ height: '140px', objectFit: 'contain' }} />
      </div>
      <div className="login-card card animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="login-header">
          <p>Please sign in to access the tracker</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">Invalid username or password</div>}
          
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="e.g. subhasish"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary login-btn" disabled={loading}>
            {loading ? 'Verifying...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
