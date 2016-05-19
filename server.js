var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static(__dirname));

app.listen(port, function (err) {
    console.log('server running on port: ' + port);
});