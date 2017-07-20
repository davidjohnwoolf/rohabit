const express = require('express');
const router = express.Router();
const Calendar = require('../models/calendar');

router.get('/calendar', (req, res) => {
	Calendar.find({}, (err, calendars) => {
		if (err) return res.json(err);

		return res.json(calendars);
	});
});

module.exports = router;