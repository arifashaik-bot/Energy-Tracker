const EnergyUsage = require('../models/EnergyUsage');
const User = require('../models/User');

// Add energy usage
exports.addEnergyUsage = async (req, res) => {
  try {
    const { dailyUsage, hourlyUsage, notes } = req.body;

    // Calculate carbon footprint (1 kWh = 0.5 kg CO2)
    const carbonFootprint = dailyUsage * 0.5;

    const energyUsage = new EnergyUsage({
      userId: req.userId,
      dailyUsage,
      hourlyUsage,
      carbonFootprint,
      notes,
    });

    await energyUsage.save();
    res.status(201).json({
      message: 'Energy usage recorded',
      energyUsage,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get today's energy usage
exports.getTodayUsage = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const usage = await EnergyUsage.findOne({
      userId: req.userId,
      date: { $gte: today, $lt: tomorrow },
    });

    res.status(200).json(usage || { dailyUsage: 0, carbonFootprint: 0 });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get weekly usage
exports.getWeeklyUsage = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const weeklyData = await EnergyUsage.find({
      userId: req.userId,
      date: { $gte: sevenDaysAgo, $lt: new Date(today.getTime() + 86400000) },
    }).sort({ date: 1 });

    res.status(200).json(weeklyData);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get monthly usage
exports.getMonthlyUsage = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    today.setDate(1); // First day of month

    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    const monthlyData = await EnergyUsage.find({
      userId: req.userId,
      date: { $gte: today, $lt: nextMonth },
    }).sort({ date: 1 });

    res.status(200).json(monthlyData);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Predict future usage (simple formula)
exports.predictUsage = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const weeklyData = await EnergyUsage.find({
      userId: req.userId,
      date: { $gte: sevenDaysAgo },
    });

    if (weeklyData.length === 0) {
      return res.status(200).json({
        predictedUsage: 5,
        message: 'Not enough data. Default prediction: 5 units',
      });
    }

    // Calculate average
    const totalUsage = weeklyData.reduce((sum, data) => sum + data.dailyUsage, 0);
    const averageUsage = totalUsage / weeklyData.length;

    // Add 10% variation for "next day prediction"
    const predictedUsage = (averageUsage * 1.1).toFixed(2);

    res.status(200).json({
      predictedUsage: parseFloat(predictedUsage),
      basedOnLastDays: weeklyData.length,
      message: `Tomorrow you may use ${predictedUsage} units`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Check for high usage alert
exports.checkAlert = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayUsage = await EnergyUsage.findOne({
      userId: req.userId,
      date: { $gte: today, $lt: tomorrow },
    });

    const usage = todayUsage?.dailyUsage || 0;
    const goal = user.energyGoal;

    if (usage > goal) {
      return res.status(200).json({
        alert: true,
        message: `⚠️ High electricity usage today! You've used ${usage} units (Goal: ${goal})`,
        currentUsage: usage,
        goal,
        percentageExceeded: Math.round(((usage - goal) / goal) * 100),
      });
    }

    res.status(200).json({
      alert: false,
      message: `✅ Good job! You're within your goal (${usage}/${goal} units)`,
      currentUsage: usage,
      goal,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get energy saving tips
exports.getSavingTips = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayUsage = await EnergyUsage.findOne({
      userId: req.userId,
      date: { $gte: today, $lt: tomorrow },
    });

    const usage = todayUsage?.dailyUsage || 0;
    let tips = [];

    if (usage > 15) {
      tips = [
        '🌡️ Turn off AC when not needed',
        '💡 Switch to LED bulbs (saves 75% energy)',
        '📺 Reduce screen brightness',
        '❄️ Use ceiling fans instead of AC',
        '🔌 Unplug devices not in use',
      ];
    } else if (usage > 10) {
      tips = [
        '🌱 Reduce fan usage during cool hours',
        '💡 Use natural lighting when possible',
        '🔌 Turn off standby devices',
        '⏰ Set AC timer for specific hours',
      ];
    } else {
      tips = [
        '🎉 Excellent! Keep up the good work!',
        '📈 Your usage is within optimal range',
        '💚 You\'re contributing to a greener environment',
      ];
    }

    res.status(200).json({
      usage,
      tips,
      category: usage > 15 ? 'High' : usage > 10 ? 'Medium' : 'Low',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Compare usage (today vs yesterday, this month vs last month)
exports.compareUsage = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const todayUsage = await EnergyUsage.findOne({
      userId: req.userId,
      date: { $gte: today, $lt: tomorrow },
    });

    const yesterdayUsage = await EnergyUsage.findOne({
      userId: req.userId,
      date: { $gte: yesterday, $lt: today },
    });

    const todayVal = todayUsage?.dailyUsage || 0;
    const yesterdayVal = yesterdayUsage?.dailyUsage || 0;

    const difference = todayVal - yesterdayVal;
    const percentageChange = yesterdayVal === 0 ? 0 : ((difference / yesterdayVal) * 100).toFixed(2);

    res.status(200).json({
      today: todayVal,
      yesterday: yesterdayVal,
      difference,
      percentageChange: parseFloat(percentageChange),
      improved: difference < 0,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Simulated IoT data
exports.getIOTData = async (req, res) => {
  try {
    // Generate random IoT data (simulated smart meter)
    const currentUsage = (Math.random() * 5).toFixed(2); // 0-5 kW
    const temperature = (20 + Math.random() * 15).toFixed(1); // 20-35°C
    const timestamp = new Date();

    res.status(200).json({
      smartMeterId: 'SM-' + req.userId.substring(0, 8),
      currentPower: parseFloat(currentUsage) + ' kW',
      temperature: parseFloat(temperature) + ' °C',
      timestamp,
      status: 'Online',
      message: 'Live data from smart meter',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
