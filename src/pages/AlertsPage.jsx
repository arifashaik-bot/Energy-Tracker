import React from 'react';

function AlertsPage() {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'High usage today!',
      details: 'Your usage (5.5 kWh) is 55% of your daily goal',
      time: '2 hours ago',
      icon: '⚠️'
    },
    {
      id: 2,
      type: 'info',
      message: 'Peak usage detected',
      details: 'Highest consumption at 4 PM (2.1 kWh)',
      time: '4 hours ago',
      icon: 'ℹ️'
    },
    {
      id: 3,
      type: 'success',
      message: 'Good progress!',
      details: 'You\'re 20% below average usage today',
      time: '6 hours ago',
      icon: '✅'
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">⚡ Energy Tracker</div>
          <div className="navbar-menu">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/energy-usage">Energy Usage</a>
            <a href="/predictions">Predictions</a>
            <a href="/alerts" className="active">Alerts</a>
            <a href="/tips">Tips</a>
            <a href="/iot-data">IoT</a>
            <a href="/carbon-footprint">Carbon</a>
            <a href="/comparisons">Compare</a>
            <a href="/goal-tracker">Goals</a>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>🔔 Energy Alerts</h1>
            <p>Stay notified about your energy usage</p>
          </div>

          {/* Alerts List */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {alerts.map((alert) => (
              <div
                key={alert.id}
                style={{
                  background: alert.type === 'warning' ? '#fef3c7' : 
                             alert.type === 'info' ? '#e0f2fe' : '#dcfce7',
                  borderLeft: `4px solid ${
                    alert.type === 'warning' ? '#f59e0b' : 
                    alert.type === 'info' ? '#06b6d4' : '#10b981'
                  }`,
                  padding: '1.5rem',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem' }}>{alert.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      margin: '0 0 0.5rem 0',
                      color: alert.type === 'warning' ? '#92400e' : 
                             alert.type === 'info' ? '#164e63' : '#166534'
                    }}>
                      {alert.message}
                    </h3>
                    <p style={{
                      margin: '0.5rem 0 0 0',
                      color: alert.type === 'warning' ? '#92400e' : 
                             alert.type === 'info' ? '#164e63' : '#166534',
                      opacity: 0.8
                    }}>
                      {alert.details}
                    </p>
                    <p style={{
                      margin: '1rem 0 0 0',
                      fontSize: '0.85rem',
                      opacity: 0.6
                    }}>
                      {alert.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alert Settings */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginTop: '3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>Alert Settings</h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '1rem',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#1f2937' }}>High Usage Alert</h4>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>Notify when usage exceeds goal</p>
                </div>
                <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '1rem',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#1f2937' }}>Peak Usage Alert</h4>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>Notify about peak usage times</p>
                </div>
                <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '1rem',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#1f2937' }}>Positive Achievement</h4>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>Celebrate when you save energy</p>
                </div>
                <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertsPage;
