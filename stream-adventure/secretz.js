
var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var through2 = require('through2');

var cipherName = process.argv[2];
var password = process.argv[3];

var cryptoStream = crypto.createDecipher(cipherName, password);

zlib.createGunzip()

var md5stream = crypto.createHash('md5', { encoding: 'hex' });

var parser = tar.Parse();
parser.on('entry', function (e) {
    return e.pipe(md5stream);
});
var fs = require('fs');
fs.createReadStream('file.tar').pipe(parser);
