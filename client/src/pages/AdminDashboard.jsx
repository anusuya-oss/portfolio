import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin/login');
  };

  return (
    <div className="container-fluid min-vh-100" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 d-md-block glass-card sidebar collapse" style={{ minHeight: '100vh', borderRadius: '0', borderTop: 'none', borderBottom: 'none', borderLeft: 'none' }}>
          <div className="position-sticky pt-4 px-3">
            <h4 className="fw-bold mb-4" style={{ color: 'var(--accent-color)' }}>Admin Panel</h4>
            <ul className="nav flex-column gap-2">
              <li className="nav-item">
                <a className="nav-link active text-light bg-dark rounded" href="#"><i className="bi bi-speedometer2 me-2"></i> Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#"><i className="bi bi-person me-2"></i> Profile & About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#"><i className="bi bi-journal-code me-2"></i> Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#"><i className="bi bi-tools me-2"></i> Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#"><i className="bi bi-briefcase me-2"></i> Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#"><i className="bi bi-envelope me-2"></i> Messages</a>
              </li>
            </ul>
            <hr className="text-secondary mt-5" />
            <button className="btn btn-outline-danger w-100 mt-3" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-2"></i> Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom border-secondary">
            <h1 className="h2 text-light">Dashboard Overview</h1>
            <Link to="/" className="btn btn-outline-premium btn-sm">View Live Site <i className="bi bi-box-arrow-up-right ms-1"></i></Link>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-6 col-lg-3">
              <div className="glass-card p-4 text-center">
                <h6 className="text-muted text-uppercase fw-bold mb-2">Total Projects</h6>
                <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>3</h2>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="glass-card p-4 text-center">
                <h6 className="text-muted text-uppercase fw-bold mb-2">Total Skills</h6>
                <h2 className="display-5 fw-bold text-info">15</h2>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="glass-card p-4 text-center">
                <h6 className="text-muted text-uppercase fw-bold mb-2">Unread Messages</h6>
                <h2 className="display-5 fw-bold text-warning">2</h2>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="glass-card p-4 text-center">
                <h6 className="text-muted text-uppercase fw-bold mb-2">Certifications</h6>
                <h2 className="display-5 fw-bold text-success">4</h2>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h4 className="mb-4">Recent Contact Messages</h4>
            <div className="table-responsive">
              <table className="table table-dark table-hover align-middle">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Today</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td>Job Opportunity</td>
                    <td><span className="badge bg-warning text-dark">Unread</span></td>
                    <td><button className="btn btn-sm btn-outline-light">View</button></td>
                  </tr>
                  <tr>
                    <td>Yesterday</td>
                    <td>Jane Smith</td>
                    <td>jane@example.com</td>
                    <td>Freelance Work</td>
                    <td><span className="badge bg-success">Read</span></td>
                    <td><button className="btn btn-sm btn-outline-light">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
