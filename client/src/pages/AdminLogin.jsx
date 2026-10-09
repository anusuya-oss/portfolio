import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Dummy login logic since backend is disconnected for this frontend demo
    setTimeout(() => {
      if (email === 'admin@admin.com' && password === 'admin') {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="glass-card p-5" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="text-center mb-4">
          <Link to="/" className="text-decoration-none" style={{ color: 'var(--accent-color)' }}>
            <i className="bi bi-arrow-left me-2"></i>Back to Portfolio
          </Link>
          <h2 className="fw-bold mt-3 mb-1">Admin Login</h2>
          <p className="text-muted">Sign in to manage your portfolio</p>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-light">Email address</label>
            <div className="input-group">
              <span className="input-group-text bg-dark text-light border-secondary"><i className="bi bi-envelope"></i></span>
              <input 
                type="email" 
                className="form-control bg-dark text-light border-secondary" 
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label text-light">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-dark text-light border-secondary"><i className="bi bi-lock"></i></span>
              <input 
                type="password" 
                className="form-control bg-dark text-light border-secondary" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>
          <button type="submit" className="btn btn-premium w-100 py-2" disabled={loading}>
            {loading ? (
              <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Signing in...</>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
