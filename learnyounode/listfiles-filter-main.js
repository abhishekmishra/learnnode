var path = null;
var filter = null;

var listfilesFilter = require('./listfiles-filter-module.js'); 

function listFilteredFiles(err, filesList) {
    if(err) {
        console.log('Error reading directory ' + err);
    }

    for (var i = 0; i < filesList.length; i++) {
        console.log(filesList[i]);
    }
}

if(process.argv.length > 2) {
    path = process.argv[2];
    filter = process.argv[3];

    listfilesFilter(path, filter, listFilteredFiles);
}