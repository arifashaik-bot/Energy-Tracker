import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">⚡ Energy Tracker</div>
          <div className="navbar-menu">
            <a href="/">Home</a>
            <a href="/dashboard" className="active">Dashboard</a>
            <a href="/energy-usage">Energy Usage</a>
            <a href="/predictions">Predictions</a>
            <a href="/alerts">Alerts</a>
            <a href="/tips">Tips</a>
            <a href="/iot-data">IoT</a>
            <a href="/carbon-footprint">Carbon</a>
            <a href="/comparisons">Compare</a>
            <a href="/goal-tracker">Goals</a>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Welcome back, Energy Saver</h1>
          <p>Overview of your current consumption, savings, and goals.</p>
        </div>

        <div className="dashboard-grid">
          <div className="stat-card" style={{ borderLeft: '4px solid #7c3aed' }}>
            <div className="stat-card-title">Current Usage</div>
            <div className="stat-card-value">5.8 kWh</div>
            <div className="stat-card-unit">Last hour</div>
          </div>
          <div className="stat-card" style={{ borderLeft: '4px solid #2563eb' }}>
            <div className="stat-card-title">Today's Total</div>
            <div className="stat-card-value">42.3 kWh</div>
            <div className="stat-card-unit">Compared to 49.1 yesterday</div>
          </div>
          <div className="stat-card" style={{ borderLeft: '4px solid #8b5cf6' }}>
            <div className="stat-card-title">Goal Progress</div>
            <div className="stat-card-value">84%</div>
            <div className="stat-card-unit">On track for the week</div>
          </div>
          <div className="stat-card" style={{ borderLeft: '4px solid #22d3ee' }}>
            <div className="stat-card-title">Estimated Savings</div>
            <div className="stat-card-value">12%</div>
            <div className="stat-card-unit">vs last week</div>
          </div>
        </div>

        <div className="chart-container">
          <h2>Energy Snapshot</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
            Quick insights into your usage pattern and the most powerful ways to save.
          </p>
          <div style={{ minHeight: '260px', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem' }}>
            <div className="stat-card" style={{ padding: '1.25rem', background: 'rgba(124, 58, 237, 0.18)' }}>
              <div className="stat-card-title">Peak Hour</div>
              <div className="stat-card-value">7:00 PM</div>
              <div className="stat-card-unit">Plan to reduce peak load</div>
            </div>
            <div className="stat-card" style={{ padding: '1.25rem', background: 'rgba(37, 99, 235, 0.18)' }}>
              <div className="stat-card-title">Lowest Hour</div>
              <div className="stat-card-value">2:00 AM</div>
              <div className="stat-card-unit">Best time to run appliances</div>
            </div>
            <div className="stat-card" style={{ padding: '1.25rem', background: 'rgba(139, 92, 246, 0.18)' }}>
              <div className="stat-card-title">Carbon Saved</div>
              <div className="stat-card-value">3.1 kg</div>
              <div className="stat-card-unit">Today vs yesterday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
