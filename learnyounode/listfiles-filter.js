var fs = require('fs')

var path = null;
var filter = null;

if(process.argv.length > 2) {
    path = process.argv[2];
    filter = '.' + process.argv[3];
    //console.log('filter *.' + filter + ' from ' + path);

    fs.readdir(path, filterFiles);
}

function filterFiles(err, listOfFiles) {
    if(err) {
        console.error('Error - ' + err);
    }
    for(var i = 0; i < listOfFiles.length; i++) {
        var fname = listOfFiles[i];
        if(fname.endsWith(filter)) {
            console.log(fname);
        }
    }
}