module.exports = {
    getProduct: function (productId) {
        var product = products.find(function (p) { return p.id === productId; });
        return product;
    }
};