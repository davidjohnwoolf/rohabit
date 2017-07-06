let express = require('express')
let app = express();
let path = require('path');
let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, function() {
    console.log('listening on ' + port);
});
