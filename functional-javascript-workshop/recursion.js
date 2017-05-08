function getDependencies(tree) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.
    var deps = [];

    function getDeps(tree) {
        if (tree) {
            if (tree.dependencies) {
                Object.keys(tree.dependencies).forEach(function (value, index, arr) {
                    var name = value + '@' + tree.dependencies[value].version;
                    if (deps.indexOf(name) < 0) {
                        deps.push(name);
                    }
                    getDeps(tree.dependencies[value]);
                })
            }
        }
    }

    getDeps(tree);
    console.log(deps);
    return deps.sort();
}

module.exports = getDependencies