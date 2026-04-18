import React, { useState } from 'react';

function GoalTrackerPage() {
  const [dailyGoal, setDailyGoal] = useState(10);
  const [todayUsage] = useState(5.5);
  const [goals] = useState([
    { id: 1, name: 'Daily Limit', target: 10, current: 5.5, unit: 'kWh', progress: 55 },
    { id: 2, name: 'Weekly Budget', target: 70, current: 39.9, unit: 'kWh', progress: 57 },
    { id: 3, name: 'Monthly Savings', target: 20, current: 12.4, unit: 'kg CO₂', progress: 62 },
    { id: 4, name: 'Peak Hours', target: 3, current: 1.2, unit: 'kWh', progress: 40 },
  ]);

  const goalProgress = (todayUsage / dailyGoal) * 100;

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
            <a href="/tips">Tips</a>
            <a href="/iot-data">IoT</a>
            <a href="/carbon-footprint">Carbon</a>
            <a href="/comparisons">Compare</a>
            <a href="/goal-tracker" className="active">Goals</a>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>🎯 Goal Tracker</h1>
            <p>Monitor your energy goals and achievements</p>
          </div>

          {/* Today's Progress */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>📊 Today's Progress</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 200px',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: '#1f2937', fontWeight: '600' }}>Daily Goal</span>
                  <span style={{ color: '#6b7280' }}>{todayUsage.toFixed(1)} / {dailyGoal} kWh</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '12px',
                  background: '#e5e7eb',
                  borderRadius: '6px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${Math.min(goalProgress, 100)}%`,
                    height: '100%',
                    background: goalProgress <= 100 ? '#10b981' : '#ef4444',
                    transition: 'width 0.5s ease'
                  }}></div>
                </div>
                <div style={{
                  marginTop: '0.5rem',
                  color: goalProgress <= 100 ? '#10b981' : '#ef4444',
                  fontWeight: '600'
                }}>
                  {Math.min(goalProgress, 100).toFixed(0)}% • {goalProgress <= 100 ? 'Within Goal ✅' : 'Exceeded ⚠️'}
                </div>
              </div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: goalProgress <= 100 ? '#10b981' : '#ef4444',
                textAlign: 'center'
              }}>
                {goalProgress <= 100 ? '✅' : '⚠️'}
              </div>
            </div>
          </div>

          {/* All Goals */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1rem', color: '#1f2937' }}>📋 All Goals</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    borderLeft: `4px solid ${goal.progress >= 100 ? '#ef4444' : '#10b981'}`
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <h3 style={{ margin: 0, color: '#1f2937' }}>{goal.name}</h3>
                    <span style={{
                      background: goal.progress >= 100 ? '#fecaca' : '#dcfce7',
                      color: goal.progress >= 100 ? '#991b1b' : '#166534',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}>
                      {goal.progress}%
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    color: '#6b7280',
                    fontSize: '0.9rem'
                  }}>
                    <span>{goal.current} / {goal.target} {goal.unit}</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: '#e5e7eb',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${Math.min(goal.progress, 100)}%`,
                      height: '100%',
                      background: goal.progress >= 100 ? '#ef4444' : '#10b981',
                      transition: 'width 0.5s ease'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Set New Goal */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ marginBottom: '1rem', color: '#1f2937' }}>⚙️ Set Daily Goal</h2>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
              <div style={{ flex: 1 }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#1f2937'
                }}>
                  Daily Energy Goal (kWh)
                </label>
                <input
                  type="number"
                  value={dailyGoal}
                  onChange={(e) => setDailyGoal(parseFloat(e.target.value))}
                  min="1"
                  step="0.1"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10b981';
                    e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <button style={{
                padding: '0.75rem 1.5rem',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#059669';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#10b981';
                e.target.style.transform = 'translateY(0)';
              }}>
                Save Goal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalTrackerPage;
