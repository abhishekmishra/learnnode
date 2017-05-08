module.exports = Function(['arr', 's', 'e'], 'return Function.prototype.call.call(Array.prototype.slice, arr, s, e)'); // your solution here!

// official solution is very different and given below
// module.exports = Function.call.bind(Array.prototype.slice)