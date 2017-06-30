/*just another index.js */


var express = require('express');
var https = require('https');
var http = require('http');
var app = express();
var path = require('path');

http.createServer(app).listen(3000, function (req, res) {
    console.log("Server running on port 3000. Open localhost:3000")
});

app.get('/', function (req, res) {

    res.sendFile(path.join(process.cwd(), '/index.html'));

});

app.get('/css/:fileName', function (req, res) {
    var cssFile = path.join(process.cwd(), '/css/', req.params.fileName.replace(/^\//, ''));
    res.sendFile(cssFile)
})

app.get('/assets/:fileName', function (req, res) {
    var assetFile = path.join(process.cwd(), '/assets/', req.params.fileName.replace(/^\//, ''));
    res.sendFile(assetFile)
})
