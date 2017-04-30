var fs = require('fs')
if (process.argv.length > 2) {
    var fname = process.argv['2'];
    var buffer = fs.readFile(fname, filecount);

}

function filecount(err, buffer) {
    if (!err) {
        var str = buffer.toString();
        var linecount = str.split('\n').length - 1;
        console.log(linecount);
    }
}