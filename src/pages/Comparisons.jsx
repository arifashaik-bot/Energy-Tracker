import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ComparisonsPage() {
  const dailyComparison = [
    { period: 'Today', current: 5.5, previous: 6.0 },
    { period: 'Yesterday', current: 6.0, previous: 5.8 },
    { period: '2 Days Ago', current: 5.8, previous: 5.2 },
    { period: '3 Days Ago', current: 5.2, previous: 5.9 },
    { period: '4 Days Ago', current: 5.9, previous: 5.1 },
  ];

  const monthlyComparison = [
    { month: 'This Month', current: 164, previous: 172 },
    { month: 'Last Month', current: 172, previous: 185 },
    { month: '2 Months Ago', current: 185, previous: 195 },
    { month: '3 Months Ago', current: 195, previous: 188 },
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
            <a href="/tips">Tips</a>
            <a href="/iot-data">IoT</a>
            <a href="/carbon-footprint">Carbon</a>
            <a href="/comparisons" className="active">Compare</a>
            <a href="/goal-tracker">Goals</a>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>📈 Energy Comparisons</h1>
            <p>Compare your usage across different time periods</p>
          </div>

          {/* Daily Comparison Stats */}
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-card-title">Today vs Yesterday</div>
              <div className="stat-card-value">5.5 vs 6.0</div>
              <div className="stat-card-unit">Saved 0.5 kWh ✅</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Weekly Average</div>
              <div className="stat-card-value">5.7</div>
              <div className="stat-card-unit">kWh/day</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Monthly Progress</div>
              <div className="stat-card-value">-4.6%</div>
              <div className="stat-card-unit">vs Last Month</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Trend</div>
              <div style={{ fontSize: '2rem', color: '#10b981', fontWeight: '700' }}>↓</div>
              <div className="stat-card-unit">Improving!</div>
            </div>
          </div>

          {/* Daily Comparison Chart */}
          <div className="chart-container">
            <h2>📊 Daily Comparison (Last 5 Days)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="current" fill="#10b981" name="Current (kWh)" />
                <Bar dataKey="previous" fill="#f59e0b" name="Previous (kWh)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Comparison Chart */}
          <div className="chart-container">
            <h2>📈 Monthly Comparison</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="current" fill="#06b6d4" name="Current (kWh)" />
                <Bar dataKey="previous" fill="#8b5cf6" name="Previous (kWh)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Insights */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginTop: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>📊 Analysis</h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '1rem'
            }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>✅</span>
                <div>
                  <strong style={{ color: '#10b981' }}>Great Progress!</strong>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>You've reduced usage by 4.6% compared to last month</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>📈</span>
                <div>
                  <strong style={{ color: '#3b82f6' }}>Consistent Improvement</strong>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>Your trend shows consistent month-over-month improvement</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>🎯</span>
                <div>
                  <strong style={{ color: '#f59e0b' }}>Goal Status</strong>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>You're on track! Keep up the good energy-saving habits</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonsPage;
