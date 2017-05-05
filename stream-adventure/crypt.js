var crypto = require('crypto');
var password = process.argv[2];
var cryptoStream = crypto.createDecipher('aes256', password);
process.stdin.pipe(cryptoStream).pipe(process.stdout);
//stream.write(Buffer([135, 197, 164, 92, 129, 90, 215, 63, 92]));
//stream.end();