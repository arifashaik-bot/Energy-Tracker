import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function IoTDataPage() {
  const [currentMetrics, setCurrentMetrics] = useState({
    power: (Math.random() * 5).toFixed(2),
    temperature: (20 + Math.random() * 15).toFixed(1),
    voltage: (220 + Math.random() * 20).toFixed(1),
  });

  const [iotHistory, setIotHistory] = useState([
    { time: '12:00', power: 2.5, temp: 24 },
    { time: '12:15', power: 3.1, temp: 25 },
    { time: '12:30', power: 2.8, temp: 24.5 },
    { time: '12:45', power: 4.2, temp: 26 },
    { time: '1:00', power: 3.5, temp: 25 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetrics({
        power: (Math.random() * 5).toFixed(2),
        temperature: (20 + Math.random() * 15).toFixed(1),
        voltage: (220 + Math.random() * 20).toFixed(1),
      });

      setIotHistory(prev => [...prev.slice(1), {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        power: parseFloat((Math.random() * 5).toFixed(1)),
        temp: 20 + Math.random() * 15
      }]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
            <a href="/iot-data" className="active">IoT</a>
            <a href="/carbon-footprint">Carbon</a>
            <a href="/comparisons">Compare</a>
            <a href="/goal-tracker">Goals</a>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>📡 Live IoT Data</h1>
            <p>Real-time smart meter readings updating every 3 seconds</p>
          </div>

          {/* Live Metrics */}
          <div className="dashboard-grid">
            <div className="stat-card" style={{ animation: 'pulse 2s ease-in-out infinite' }}>
              <div className="stat-card-title">Current Power</div>
              <div className="stat-card-value">{currentMetrics.power}</div>
              <div className="stat-card-unit">kW</div>
            </div>
            <div className="stat-card" style={{ animation: 'pulse 2s ease-in-out infinite' }}>
              <div className="stat-card-title">Temperature</div>
              <div className="stat-card-value">{currentMetrics.temperature}</div>
              <div className="stat-card-unit">°C</div>
            </div>
            <div className="stat-card" style={{ animation: 'pulse 2s ease-in-out infinite' }}>
              <div className="stat-card-title">Voltage</div>
              <div className="stat-card-value">{currentMetrics.voltage}</div>
              <div className="stat-card-unit">V</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Device Status</div>
              <div style={{ fontSize: '2.5rem', color: '#10b981', fontWeight: '700' }}>● Online</div>
              <div className="stat-card-unit">Connected</div>
            </div>
          </div>

          {/* History Chart */}
          <div className="chart-container">
            <h2>📊 Real-time History (Last 30 mins)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={iotHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="power" stroke="#ec4899" strokeWidth={2} name="Power (kW)" />
                <Line type="monotone" dataKey="temp" stroke="#f59e0b" strokeWidth={2} name="Temp (°C)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Device Info */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginTop: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>Smart Meter Information</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ color: '#6b7280' }}>Device ID</span>
                <span style={{ fontWeight: '600', color: '#1f2937' }}>SM-DEMO123456</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ color: '#6b7280' }}>Last Updated</span>
                <span style={{ fontWeight: '600', color: '#1f2937' }}>Just now</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ color: '#6b7280' }}>Connection Type</span>
                <span style={{ fontWeight: '600', color: '#1f2937' }}>WiFi (5GHz)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Signal Strength</span>
                <span style={{ fontWeight: '600', color: '#10b981' }}>Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IoTDataPage;
