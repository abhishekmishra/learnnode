function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(function(value) {
            return goodUsers.some(function(value2) {
                return value2 === value;
            })
        })
    };
}

module.exports = checkUsersValid