import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function CarbonFootprintPage() {
  const carbonData = [
    { day: 'Mon', carbon: 2.1 },
    { day: 'Tue', carbon: 2.55 },
    { day: 'Wed', carbon: 3.15 },
    { day: 'Thu', carbon: 2.9 },
    { day: 'Fri', carbon: 3.6 },
    { day: 'Sat', carbon: 2.45 },
    { day: 'Sun', carbon: 2.75 },
  ];

  const sourceData = [
    { name: 'AC Cooling', value: 40 },
    { name: 'Lighting', value: 25 },
    { name: 'Appliances', value: 20 },
    { name: 'Other', value: 15 },
  ];

  const COLORS = ['#ef4444', '#f59e0b', '#10b981', '#06b6d4'];

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
            <a href="/carbon-footprint" className="active">Carbon</a>
            <a href="/comparisons">Compare</a>
            <a href="/goal-tracker">Goals</a>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>🌍 Carbon Footprint</h1>
            <p>Track your environmental impact from energy consumption</p>
          </div>

          {/* Main Stats */}
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-card-title">Today's Carbon</div>
              <div className="stat-card-value">2.75</div>
              <div className="stat-card-unit">kg CO₂</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">This Week</div>
              <div className="stat-card-value">19.5</div>
              <div className="stat-card-unit">kg CO₂</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">This Month</div>
              <div className="stat-card-value">82</div>
              <div className="stat-card-unit">kg CO₂</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Trees Needed</div>
              <div className="stat-card-value">1</div>
              <div className="stat-card-unit">to offset</div>
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="chart-container">
            <h2>📊 Weekly Carbon Footprint</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={carbonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="carbon" fill="#ef4444" name="CO₂ (kg)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="chart-container">
            <h2>🔄 Carbon by Source</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Info */}
          <div style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginTop: '2rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>🌱 Environmental Impact</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
              <li>✓ 1 kWh = 0.5 kg CO₂ emissions (average)</li>
              <li>✓ 1 tree absorbs ~20 kg CO₂/year</li>
              <li>✓ Reducing energy saves trees and the planet</li>
              <li>✓ Your monthly reduction = major impact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonFootprintPage;
