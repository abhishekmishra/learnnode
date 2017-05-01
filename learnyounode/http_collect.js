const bl = require('bl')
    , http = require('http');

function handleResponse(response) {
    response.pipe(bl(function(err, data) {
        if(err) {
            console.error(err);
        }
        var resStr = data.toString();
        console.log(resStr.length);
        console.log(resStr);
    }));
}

if(process.argv.length > 2) {
    var url = process.argv[2];
    http.get(url, handleResponse);
}
