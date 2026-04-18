import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function EnergyUsagePage() {
  const [period, setPeriod] = useState('daily');
  
  const dailyData = [
    { time: '12 AM', usage: 0.2 },
    { time: '4 AM', usage: 0.1 },
    { time: '8 AM', usage: 0.8 },
    { time: '12 PM', usage: 1.5 },
    { time: '4 PM', usage: 2.1 },
    { time: '8 PM', usage: 1.2 },
    { time: '11 PM', usage: 0.3 },
  ];

  const weeklyData = [
    { day: 'Monday', usage: 4.2 },
    { day: 'Tuesday', usage: 5.1 },
    { day: 'Wednesday', usage: 6.3 },
    { day: 'Thursday', usage: 5.8 },
    { day: 'Friday', usage: 7.2 },
    { day: 'Saturday', usage: 4.9 },
    { day: 'Sunday', usage: 5.5 },
  ];

  const monthlyData = [
    { week: 'Week 1', usage: 32.5 },
    { week: 'Week 2', usage: 35.8 },
    { week: 'Week 3', usage: 38.2 },
    { week: 'Week 4', usage: 36.9 },
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
            <a href="/energy-usage" className="active">Energy Usage</a>
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

      {/* Content */}
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>⚡ Energy Usage Tracker</h1>
            <p>Detailed consumption data for different time periods</p>
          </div>

          {/* Period Selector */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2rem',
            background: 'white',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <button
              onClick={() => setPeriod('daily')}
              style={{
                padding: '0.75rem 1.5rem',
                background: period === 'daily' ? '#10b981' : '#e5e7eb',
                color: period === 'daily' ? 'white' : '#374151',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              📅 Daily
            </button>
            <button
              onClick={() => setPeriod('weekly')}
              style={{
                padding: '0.75rem 1.5rem',
                background: period === 'weekly' ? '#10b981' : '#e5e7eb',
                color: period === 'weekly' ? 'white' : '#374151',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              📊 Weekly
            </button>
            <button
              onClick={() => setPeriod('monthly')}
              style={{
                padding: '0.75rem 1.5rem',
                background: period === 'monthly' ? '#10b981' : '#e5e7eb',
                color: period === 'monthly' ? 'white' : '#374151',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              📈 Monthly
            </button>
          </div>

          {/* Chart */}
          <div className="chart-container">
            {period === 'daily' && (
              <>
                <h2>📅 Daily Usage (Today)</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="usage" stroke="#10b981" strokeWidth={2} name="Usage (kWh)" />
                  </LineChart>
                </ResponsiveContainer>
              </>
            )}

            {period === 'weekly' && (
              <>
                <h2>📊 Weekly Usage</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="usage" fill="#06b6d4" name="Usage (kWh)" />
                  </BarChart>
                </ResponsiveContainer>
              </>
            )}

            {period === 'monthly' && (
              <>
                <h2>📈 Monthly Usage</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="usage" fill="#f59e0b" name="Usage (kWh)" />
                  </BarChart>
                </ResponsiveContainer>
              </>
            )}
          </div>

          {/* Stats */}
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-card-title">Total Today</div>
              <div className="stat-card-value">5.5</div>
              <div className="stat-card-unit">kWh</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Average This Week</div>
              <div className="stat-card-value">5.7</div>
              <div className="stat-card-unit">kWh/day</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Peak Usage</div>
              <div className="stat-card-value">2.1</div>
              <div className="stat-card-unit">kWh (4 PM)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnergyUsagePage;
