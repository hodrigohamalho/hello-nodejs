var express = require('express'),
    fs = require('fs'),
    app = express();

var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// app is running!
app.get('/', function(req, res) {
    res.send('<h1> Hello Openshift - NodeJS! </h1>');
});

app.listen(8080, ip);

module.exports = app;
