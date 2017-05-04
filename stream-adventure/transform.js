var through2 = require('through2');

function writeData(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

var upperCaserStream = through2(writeData);

process.stdin.pipe(upperCaserStream).pipe(process.stdout);