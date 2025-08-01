// doctorController.js
const Doctor = require('../models/Doctor');

const getDoctors = async (req, res) => {
  try {
    const { location, profession } = req.query;

    const query = {};
    if (location) query.location = new RegExp(location, 'i');
    if (profession) query.profession = new RegExp(profession, 'i');

    console.log('Query received:', query);

    const doctors = await Doctor.find(query);
    res.json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { getDoctors };
