import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: 'Dashboard',
      description: 'Real-time energy usage overview',
      icon: '📊',
      path: '/dashboard',
      color: '#10b981'
    },
    {
      id: 2,
      title: 'Energy Usage',
      description: 'Track daily, weekly, monthly consumption',
      icon: '⚡',
      path: '/energy-usage',
      color: '#f59e0b'
    },
    {
      id: 3,
      title: 'Predictions',
      description: 'AI-powered energy forecast',
      icon: '🔮',
      path: '/predictions',
      color: '#06b6d4'
    },
    {
      id: 4,
      title: 'Alerts',
      description: 'High usage notifications',
      icon: '🔔',
      path: '/alerts',
      color: '#ef4444'
    },
    {
      id: 5,
      title: 'Saving Tips',
      description: 'Energy conservation recommendations',
      icon: '💡',
      path: '/tips',
      color: '#8b5cf6'
    },
    {
      id: 6,
      title: 'IoT Data',
      description: 'Live smart meter readings',
      icon: '📡',
      path: '/iot-data',
      color: '#ec4899'
    },
    {
      id: 7,
      title: 'Carbon Footprint',
      description: 'Environmental impact tracking',
      icon: '🌍',
      path: '/carbon-footprint',
      color: '#10b981'
    },
    {
      id: 8,
      title: 'Comparisons',
      description: 'Daily and monthly comparisons',
      icon: '📈',
      path: '/comparisons',
      color: '#3b82f6'
    },
    {
      id: 9,
      title: 'Goal Tracker',
      description: 'Monitor your energy goals',
      icon: '🎯',
      path: '/goal-tracker',
      color: '#06b6d4'
    },
  ];

  return (
    <div className="home-page">
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">⚡ Energy Tracker</div>
        </div>
      </div>

      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="hero-badge">Smart energy management</span>
            <h1 className="hero-title">Power your home with beautiful, smarter energy insights.</h1>
            <p className="hero-text">
              Monitor your usage, forecast demand, and reduce costs with a sleek dashboard built for energy-conscious homes.
            </p>
            <div className="hero-actions">
              <button className="btn-primary hero-btn" type="button" onClick={() => navigate('/dashboard')}>
                Start Tracking
              </button>
              <button className="btn-secondary hero-btn hero-btn-outline" type="button" onClick={() => navigate('/tips')}>
                Explore Tips
              </button>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
              <div className="hero-card-header">
                <span>Live Energy Snapshot</span>
                <span className="hero-card-pill">Optimized</span>
              </div>
              <div className="hero-card-value">7.4 kWh</div>
              <div className="hero-card-meta">Last hour consumption</div>
              <div className="hero-card-stats">
                <div>
                  <strong>+15%</strong>
                  <span>Saved compared to yesterday</span>
                </div>
                <div>
                  <strong>Lower</strong>
                  <span>Forecast than average</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="features-header">
          <h2 className="features-title">All Features</h2>
          <p className="features-subtitle">
            Explore the tools that help you analyze, predict, and save energy across every room in your home.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card" onClick={() => navigate(feature.path)}>
              <div className="feature-icon" style={{ background: `${feature.color}22`, color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title" style={{ color: feature.color }}>{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <button className="feature-action" type="button">Open →</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <p>⚡ Energy Tracker © 2024 · Track, analyze, and reduce your energy consumption with confidence.</p>
      </footer>
    </div>
  );
}

export default HomePage;
