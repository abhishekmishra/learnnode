function Spy(target, method) {
    // SOLUTION GOES HERE

    function MySpy(t, m) {
        this.count = 0;
        var old = t[m];
        //console.log(old);
        this.change = function () {
            var spy = this;
            t[method] = function () {
                //console.log(spy.count);
                spy.count += 1;
                //console.log(old);
                return old.apply(t, arguments);
            }
        }
    }

    var x = new MySpy(target, method);
    x.change();
    return x;
}


module.exports = Spy