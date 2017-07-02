let express = require('express')
let app = express();
let path = require('path');
let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './src', 'index.html'));
});

app.listen(port, function() {
    console.log('listening on ' + port);
});
