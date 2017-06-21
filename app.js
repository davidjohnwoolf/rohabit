let express = require('express')
let app = express();
let port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('Working')
});

app.listen(port, function() {
    console.log('listening on ' + port);
});
