function duckCount() {
    // SOLUTION GOES HERE
    var ducks = 0;
    for(var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if(arg.hasOwnProperty('quack')) {
            ducks++;
        }
    }
    return ducks;
}

module.exports = duckCount