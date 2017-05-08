function curryN(fn, n) {
    // SOLUTION GOES HERE
    if(!n) {
        n = fn.length;
    }
    var args = new Array(n);
    function cHelper(fn, pos) {
        if(pos > 0) {
            return function(arg) {
                console.log("I'm #" + pos + " and my arg is " + arg);
                args[n - pos] = arg;
                return cHelper(fn, pos-1);
            }
        } else {
            console.log('args = ' + args);
            return fn.apply(this, args);
        }
    }
    return cHelper(fn, n);
}

//curryN(console.log, 1)("hello");

module.exports = curryN