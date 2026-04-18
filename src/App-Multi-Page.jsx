import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import EnergyUsagePage from './pages/EnergyUsagePage';
import PredictionsPage from './pages/PredictionsPage.jsx';
import AlertsPage from './pages/AlertsPage';
import TipsPage from './pages/TipsPage';
import IoTDataPage from './pages/IoTData';
import CarbonFootprintPage from './pages/CarbonFootprintPage';
import ComparisonsPage from './pages/Comparisons.jsx';
import GoalTrackerPage from './pages/GoalTrackerPage';

// Demo user - no login needed!
const DEMO_USER = {
  _id: 'demo-user-123',
  name: 'Demo User',
  email: 'demo@example.com',
  energyGoal: 10,
  createdAt: new Date()
};

const DEMO_TOKEN = 'demo-token-12345';

function App() {
  const user = DEMO_USER;
  const token = DEMO_TOKEN;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard token={token} user={user} onLogout={() => {}} />} />
        <Route path="/energy-usage" element={<EnergyUsagePage />} />
        <Route path="/predictions" element={<PredictionsPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/iot-data" element={<IoTDataPage />} />
        <Route path="/carbon-footprint" element={<CarbonFootprintPage />} />
        <Route path="/comparisons" element={<ComparisonsPage />} />
        <Route path="/goal-tracker" element={<GoalTrackerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
