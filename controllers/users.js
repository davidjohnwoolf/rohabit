const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err) return res.json(error);

		return res.json(users);
	});
});

module.exports = router;