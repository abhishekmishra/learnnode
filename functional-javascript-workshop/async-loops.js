function loadUsers(userIds, load, done) {
    var users = []
    userIds.forEach(function(value, index, arr){
        load(value, users.push);
    })
    // for (var i = 0; i < userIds.length; i++) {
    //     users.push(load(userIds[i]))
    // }
    return done(users)
}

module.exports = loadUsers