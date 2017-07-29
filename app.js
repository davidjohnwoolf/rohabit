const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const users = require('./controllers/users');
const calendars = require('./controllers/calendars');

// database connection
const database = 'mongodb://localhost:27017/rohabit';
mongoose.connect(database);

//get default connection
const db = mongoose.connection;

// bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// middleware
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', users);
app.use('/', calendars);


app.listen(3000, () => {
	console.log('listening on ' + port);
});