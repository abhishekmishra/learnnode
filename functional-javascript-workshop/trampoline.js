function repeat(operation, num) {
    //console.log(operation.toString())
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return null
    operation()
    return repeat.bind(this, operation, --num);
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    while(fn != null) {
        fn = fn();
    }
}

module.exports = function (operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat.bind(this, operation, --num))
}
