const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bodyParser = require('body-parser');

// body parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// index
router.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err) return res.json(error);

		return res.json(users);
	});
});

// create
router.post('/users', (req, res) => {
	console.log(res.body)
	const user = new User(req.body);

	user.save((err, user) => {
		if (err) return res.json(err);

		res.json({ message: 'User Created' });
	});
});

module.exports = router;