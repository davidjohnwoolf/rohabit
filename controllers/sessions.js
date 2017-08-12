const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bodyParser = require('body-parser');

// body parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// login
router.post('/login', (req, res) => {
	User.findOne({ username: req.body.username }, (err, user) => {
		if (err) return res.json(err);

		if (!user) {
			return res.json({ error: 'Username or Password Incorrect' });

		} else {
			user.comparePassword(req.body.password, (err, isMatch) => {
				if (err) return res.json(err);

				isMatch
					? res.json({ message: 'Successfully Authenticated', token })
					: res.json({ error: 'Username or Password Incorrect' });
			});
		}
	});
});

module.exports = router;