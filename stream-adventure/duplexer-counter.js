var duplexer2 = require('duplexer2');
var stream = require("stream");
var through2 = require('through2').obj;

module.exports = function (counter) {
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side
    var counts = {};

    var writable = through2(function (buffer, enc, next) {
        var country = buffer.country;
        if (country in counts) {
            counts[country] = counts[country] + 1;
        } else {
            counts[country] = 1;
        }
        next();
    }, function (next) {
        counter.setCounts(counts);
        next();
    });
    var dup = duplexer2({ objectMode: true }, writable, counter);
    return dup;
};