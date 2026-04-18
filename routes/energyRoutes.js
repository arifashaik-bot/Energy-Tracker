const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  addEnergyUsage,
  getTodayUsage,
  getWeeklyUsage,
  getMonthlyUsage,
  predictUsage,
  checkAlert,
  getSavingTips,
  compareUsage,
  getIOTData,
} = require('../controllers/energyController');

// All routes are protected with auth middleware
router.post('/add', auth, addEnergyUsage);
router.get('/today', auth, getTodayUsage);
router.get('/weekly', auth, getWeeklyUsage);
router.get('/monthly', auth, getMonthlyUsage);
router.get('/predict', auth, predictUsage);
router.get('/alert', auth, checkAlert);
router.get('/tips', auth, getSavingTips);
router.get('/compare', auth, compareUsage);
router.get('/iot', auth, getIOTData);

module.exports = router;
