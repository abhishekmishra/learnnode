module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce(function(acc, currentVal, currentIndex, array) {
        //console.log(acc);
        acc.push(fn(currentVal));
        return acc;
    }, []);
}