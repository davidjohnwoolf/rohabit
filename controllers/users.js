const express = require('express');
const router = express.Router();
const User = require('../models/user');

//index
router.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err) return res.json(error);

		return res.json(users);
	});
});

router.post('/user', (req, res) => {
	const user = new User(req.body);

	user.save((err, user) => {
		if (err) return res.json(err);

		res.json({ message: 'User Created' });
	});
});

module.exports = router;