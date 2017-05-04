var http = require('http');
var fs = require('fs');
var through2 = require('through2');

function writeData(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

var upperCaserStream = through2(writeData);

var server = http.createServer(function (req, res) {
    req.pipe(upperCaserStream).pipe(res);
});
server.listen(process.argv[2]);