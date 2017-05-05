var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var through2 = require('through2');

var cipherName = process.argv[2];
var password = process.argv[3];

var cryptoStream = crypto.createDecipher(cipherName, password);

var parser = tar.Parse();
parser.on('entry', function (e) {
    //console.log(e);
    if (e.type === 'File') {
        //console.log(e);
        var md5stream = crypto.createHash('md5', { encoding: 'hex' });
        e.pipe(md5stream).pipe(through2(function(buffer, enc, next) {
            console.log(buffer.toString() + ' ' + e.path);
        }));
    }
});

process.stdin.pipe(cryptoStream).pipe(zlib.createGunzip())
    .pipe(parser);
