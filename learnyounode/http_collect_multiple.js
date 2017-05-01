const bl = require('bl');
const http = require('http');

var requests = {};

function printWhenAllDone(url, resStr) {
    requests[url] = resStr;
    //console.log('done ' + url + ' resonse ' + resStr);

    var done = true;
    for (var key in requests) {
        if (requests[key] == null) {
            done = false;
        }
    }
    if (done) {
        for (var key in requests) {
            console.log(requests[key]);
        }
    }
}


/**
 * see http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
 * for issues with variable scoping in callbacks and solutions
 * espescially the let scope in ES6
 */
if (process.argv.length > 2) {
    for (var i = 2; i < process.argv.length; i++) {
        var url = process.argv[i];
        requests[url] = null;
        (function (me) {
            http.get(me, function (response) {
                response.pipe(bl(function (err, data) {
                    if (err) {
                        console.error(err);
                    }
                    var resStr = data.toString();
                    printWhenAllDone(me, resStr);
                }));
            });
        }(url));
    }
}
