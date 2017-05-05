function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(
        function (counter, value) {
            if (value in counter) {
                counter[value] = counter[value] + 1;
            } else {
                counter[value] = 1;
            }
            return counter;
        },
        {});
}

module.exports = countWords