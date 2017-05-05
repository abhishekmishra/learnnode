function getShortMessages(messages) {
    return messages.map(function(value, index, array) {
        return value.message;
    })
    .filter(function(value, index, array) {
        if(value.length < 50) {
            return true;
        }
        return false;
    });
}

module.exports = getShortMessages