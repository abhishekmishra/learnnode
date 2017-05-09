
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {
  getProducts: function () {
    return products;
  },

  releaseChange: function () {
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return changeHandler.convertToChange(currentBalance);
  },

  insertCoin: function (coinType) {
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  vendProduct: function (productId) {
    var product = this.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }

};
