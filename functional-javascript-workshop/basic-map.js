function doubleAll(numbers) {
    return numbers.map(function (value, index, arra) {
        return value * value;
    });
}

module.exports = doubleAll