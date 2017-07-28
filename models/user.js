const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, index: { unique: true }, match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ },
	password: { type: String, required: true }
});

// password hash before save
UserSchema.pre('save', (next) => {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});