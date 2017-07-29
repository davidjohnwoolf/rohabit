const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
	User.find({}, (err, user) => {
		if (err) return res.json(error);

		return res.json(user);
	});
});

module.exports = router;