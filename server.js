const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const users = require('./controllers/users');
const sessions = require('./controllers/sessions');

// database connection
const database = 'mongodb://localhost:27017/rohabit';
mongoose.connect(database);

//get default connection
const db = mongoose.connection;

// bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// middleware
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', sessions);
app.use('/users', users);


app.listen(3000, () => {
	console.log('listening on ' + port);
});