module.exports = {
    getAmount: function (coinType) {
        // COINS:
        // [p]enny
        // [n]ickel
        // [d]ime
        // [q]uarter
        var coins = {
            'p': 1,
            'n': 5,
            'd': 10,
            'q': 25
        }
        var coin = coins[coinType];
        if (coin) {
            return coin;
        } else {
            throw new Error('Unrecognized coin ' + coinType);
        }
    },

    coinOrder: ['q', 'd', 'n', 'p'],

    convertToChange: function(amount) {
        if(amount === 0) {
            return [];
        }
        else {
            //console.log('amount is ' + amount + ' coins ' + this.coinOrder);
            for(var i = 0; i < this.coinOrder.length; i++) {
                var amt = this.getAmount(this.coinOrder[i]);
                //console.log('for coin ' + this.coinOrder[i] + ' amt = ' + amt);
                if(amount >= amt) {
                    console.log(amount + ' > ' + amt);
                    var res = [this.coinOrder[i]];
                    Array.prototype.push.apply(res, this.convertToChange(amount - amt));
                    console.log(res);
                    return res;
                }
            }
        }
    }
};