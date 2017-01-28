var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/static/public/pages/index.html');
});

app.use('/static', express.static(__dirname + '/static'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(3030, function() {
    console.log('App creative person listening on port 3030!');
});
