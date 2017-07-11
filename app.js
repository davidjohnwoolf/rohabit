const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;
const databaseUrl = 'mongodb://localhost:27017/rohabit';

//set space for database in global scope
let db;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/habits', (req, res) => {
	db.collection('habits').find().toArray((err, results) => res.send(results));
});

MongoClient.connect(databaseUrl, (err, database) => {
	if (err) return console.log(err);

	db = database;

	app.listen(3000, () => {
		console.log('listening on ' + port);
	});
});