const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		index: { unique: true },
		match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	},
	password: {
		type: String,
		required: true,
		match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
	}
});

// hash password before save
UserSchema.pre('save', function(next) {
	const user = this;

	if (user.isModified('password')) {
		bcrypt.genSalt(10, (err, salt) => {
			if (err) return next(err);

			bcrypt.hash(user.password, salt, (err, hash) => {
				if (err) return next(err);

				user.password = hash;
				next();
			});
		});

	} else return next();

});

UserSchema.methods.comparePassword = function(candidatePassword, done) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return done(err);

		done(null, isMatch);
	});
};

module.exports = mongoose.model('User', UserSchema);