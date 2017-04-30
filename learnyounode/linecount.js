var fs = require('fs')
//console.log(process.argv[2]);
if(process.argv.length > 2) {
    var fname = process.argv['2'];
    //console.log(fname);
    var buffer = fs.readFileSync(fname);
    var str = buffer.toString();
    //console.log(str);
    var linecount = str.split('\n').length - 1;
    console.log(linecount);
}