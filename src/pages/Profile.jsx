import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

function Profile({ token, user, setUser }) {
  const navigate = useNavigate();
  const [energyGoal, setEnergyGoal] = useState(user?.energyGoal || 10);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdateGoal = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.put(
        `${API_URL}/auth/energy-goal`,
        { energyGoal: parseFloat(energyGoal) },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser(response.data.user);
      setMessage('✅ Goal updated successfully!');
    } catch (error) {
      setMessage('❌ Failed to update goal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-content">
          <a href="#" className="navbar-brand" onClick={() => navigate('/dashboard')}>
            ⚡ Energy Tracker
          </a>
          <div className="navbar-menu" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <a href="/dashboard">Dashboard</a>
            <a href="#profile">Profile</a>
          </div>
          <button className="navbar-logout" onClick={() => navigate('/login')}>
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="dashboard-container" style={{ minHeight: '90vh', paddingTop: '3rem' }}>
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>👤 My Profile</h1>
            <p>Manage your account settings</p>
          </div>

          {message && (
            <div className={`alert ${message.includes('✅') ? 'alert-success' : 'alert-danger'}`}>
              {message}
            </div>
          )}

          <div className="card" style={{ maxWidth: '500px', marginBottom: '2rem' }}>
            <div className="card-header">
              <h2>Account Information</h2>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>
                Full Name
              </label>
              <p style={{ fontSize: '1.1rem', color: 'var(--text)' }}>{user?.name}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>
                Email Address
              </label>
              <p style={{ fontSize: '1.1rem', color: 'var(--text)' }}>{user?.email}</p>
            </div>

            <div className="card-footer">
              <form onSubmit={handleUpdateGoal}>
                <div className="form-group">
                  <label>Daily Energy Goal (kWh)</label>
                  <input
                    type="number"
                    value={energyGoal}
                    onChange={(e) => setEnergyGoal(e.target.value)}
                    min="1"
                    step="0.1"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  {loading ? 'Updating...' : 'Update Goal'}
                </button>
              </form>
            </div>
          </div>

          <div className="card" style={{ maxWidth: '500px', backgroundColor: '#f9fafb' }}>
            <h3>📊 Energy Insights</h3>
            <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
              <li style={{ marginBottom: '0.8rem' }}>
                🎯 <strong>Current Goal:</strong> {user?.energyGoal} kWh/day
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                📅 <strong>Member Since:</strong> {new Date(user?.createdAt).toLocaleDateString()}
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                🌍 <strong>Carbon Saved:</strong> Tracked with every unit saved
              </li>
              <li>
                💡 <strong>Tips:</strong> Personalized based on your usage
              </li>
            </ul>
          </div>

          <button
            className="btn-secondary"
            style={{ marginTop: '2rem', width: '100%', maxWidth: '500px' }}
            onClick={() => navigate('/dashboard')}
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
