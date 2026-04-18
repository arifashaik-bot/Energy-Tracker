import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function PredictionsPage() {
  const predictionData = [
    { day: 'Today', actual: 5.5, predicted: 5.4 },
    { day: 'Tomorrow', actual: null, predicted: 5.9 },
    { day: '+2 Days', actual: null, predicted: 6.2 },
    { day: '+3 Days', actual: null, predicted: 5.8 },
    { day: '+4 Days', actual: null, predicted: 6.5 },
    { day: '+5 Days', actual: null, predicted: 5.7 },
    { day: '+6 Days', actual: null, predicted: 6.0 },
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
            <a href="/predictions" className="active">Predictions</a>
            <a href="/alerts">Alerts</a>
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
            <h1>🔮 Energy Predictions</h1>
            <p>AI-powered forecasts for your energy consumption</p>
          </div>

          {/* Prediction Info */}
          <div style={{
            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Tomorrow's Prediction</h2>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              5.9 kWh
            </div>
            <p style={{ opacity: 0.9 }}>Based on your last 7 days of usage patterns</p>
          </div>

          {/* Chart */}
          <div className="chart-container">
            <h2>📊 7-Day Forecast</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#06b6d4" 
                  strokeWidth={2}
                  name="Predicted (kWh)"
                  dot={{ fill: '#06b6d4' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Insights */}
          <div className="dashboard-grid">
            <div className="stat-card" style={{ borderLeft: '4px solid #06b6d4' }}>
              <div className="stat-card-title">Highest Predicted</div>
              <div className="stat-card-value">6.5</div>
              <div className="stat-card-unit">kWh on +4 Days</div>
            </div>
            <div className="stat-card" style={{ borderLeft: '4px solid #10b981' }}>
              <div className="stat-card-title">Lowest Predicted</div>
              <div className="stat-card-value">5.7</div>
              <div className="stat-card-unit">kWh on +5 Days</div>
            </div>
            <div className="stat-card" style={{ borderLeft: '4px solid #f59e0b' }}>
              <div className="stat-card-title">Average Prediction</div>
              <div className="stat-card-value">6.0</div>
              <div className="stat-card-unit">kWh/day</div>
            </div>
          </div>

          {/* Tips */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginTop: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>How Predictions Work</h2>
            <ul style={{ 
              listStyle: 'none',
              fontSize: '1rem',
              color: '#6b7280',
              lineHeight: '2'
            }}>
              <li>✓ Analyzes your last 7 days of usage patterns</li>
              <li>✓ Considers day of week and weather factors</li>
              <li>✓ Updates automatically based on new data</li>
              <li>✓ Accuracy improves over time</li>
              <li>✓ Helps you plan energy consumption</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictionsPage;
