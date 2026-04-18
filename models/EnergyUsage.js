const mongoose = require('mongoose');

const energyUsageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  dailyUsage: {
    type: Number, // in kWh
    required: true,
  },
  hourlyUsage: [
    {
      hour: Number,
      usage: Number,
    },
  ],
  carbonFootprint: {
    type: Number, // in kg CO2
    default: 0,
  },
  notes: String,
});

module.exports = mongoose.model('EnergyUsage', energyUsageSchema);
