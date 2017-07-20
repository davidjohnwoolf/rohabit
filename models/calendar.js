const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
	title: { type: String, required: true },
	isActive: { type: Boolean, required: true }
});

module.exports = mongoose.model('Calendar', CalendarSchema);