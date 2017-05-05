function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE

    function reduceUtil(arr, fn, initial, index) {
        if (index >= arr.length) {
            return initial;
        } else {
            var next = fn(initial, arr[index], index, arr);
            return reduceUtil(arr, fn, next, index + 1);
        }
    }

    return reduceUtil(arr, fn, initial, 0);

}

module.exports = reduce