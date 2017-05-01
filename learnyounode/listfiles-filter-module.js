module.exports = function (path, filter, callback) {
    var fs = require('fs');

    filter = '.' + filter;

    if (path != null && filter != null) {
        fs.readdir(path, filterFiles);
    } else {
        return callback('path or filter is null');
    }

    function filterFiles(err, listOfFiles) {
        var filteredList = [];
        if (err) {
            return callback(err);
        }
        for (var i = 0; i < listOfFiles.length; i++) {
            var fname = listOfFiles[i];
            if (fname.endsWith(filter)) {
                filteredList[filteredList.length] = fname;
                //console.log(fname);
            }
        }
        return callback(null, filteredList);
    }
}