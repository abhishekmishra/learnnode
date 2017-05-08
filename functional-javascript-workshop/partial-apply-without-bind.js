var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE
    return function () {
        var args = [].slice.call(arguments);
        args.unshift(namespace);
        console.log.apply(this, args);
    }
}

module.exports = logger