import React from 'react';

function TipsPage() {
  const tips = [
    { icon: '🌡️', title: 'Temperature Control', desc: 'Turn off AC when not needed. Use fans during cool hours.' },
    { icon: '💡', title: 'LED Lighting', desc: 'Switch to LED bulbs - saves 75% energy compared to incandescent.' },
    { icon: '📺', title: 'Screen Time', desc: 'Reduce screen brightness and use dark mode when possible.' },
    { icon: '❄️', title: 'Cooling Efficiently', desc: 'Use ceiling fans instead of AC, set AC timer for specific hours.' },
    { icon: '🔌', title: 'Unplug Devices', desc: 'Unplug devices not in use to prevent phantom power drain.' },
    { icon: '🚿', title: 'Hot Water', desc: 'Take shorter showers and use cold water for laundry when possible.' },
    { icon: '🍳', title: 'Kitchen Usage', desc: 'Use pressure cookers, keep fridge seals intact, cook efficiently.' },
    { icon: '🧘', title: 'Smart Scheduling', desc: 'Do heavy tasks during off-peak hours for better rates.' },
  ];

  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">⚡ Energy Tracker</div>
          <div className="navbar-menu">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/energy-usage">Energy Usage</a>
            <a href="/predictions">Predictions</a>
            <a href="/alerts">Alerts</a>
            <a href="/tips" className="active">Tips</a>
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
            <h1>💡 Energy Saving Tips</h1>
            <p>Practical ways to reduce your energy consumption</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {tips.map((tip, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#10b981' }}>{tip.title}</h3>
                <p style={{ margin: 0, color: '#6b7280', fontSize: '0.95rem' }}>{tip.desc}</p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>💚 Save Energy, Save Money!</h2>
            <p style={{ opacity: 0.9 }}>Implementing these tips can reduce your energy bills by up to 30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipsPage;
