"use strict";
export const __esModule = true;
const _indexsample = exports.Items = void 0;
export { _indexsample as indexsample };
var Items = /** @class */ (function () {
    function Items(itemName, itemPrice) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
    }
    Items.prototype.setItemName = function (product) {
        this.itemName = product;
    };
    Items.prototype.setItemPrice = function (product) {
        this.itemPrice = product;
    };
    Items.prototype.getItemName = function () {
        return this.itemName;
    };
    Items.prototype.getItemPrice = function () {
        return this.itemPrice;
    };
    return Items;
}());
const _Items = Items;
export { _Items as Items };
function add(product) {
    let product = document.getElementById('myBtn'); 
    document.getElementById('myBtn').innerHTML = product;
    let shoppingCart1 = new indexsample();
    shoppingCart1.add(product);
}
var indexsample = /** @class */ (function () {
    function indexsample() {
        this.cartItems = [];
        this.totalPrice = 0;
    }
    indexsample.prototype.addProducts = function (itemName, itemPrice) {
        var cartItem = new Items(itemName, itemPrice);
        var test = sessionStorage.getItem("shoppingCart");
        if (test != null) {
            this.cartItems = JSON.parse(test);
        }
        this.cartItems.push(cartItem);
        sessionStorage.setItem("shoppingCart", JSON.stringify(this.cartItems));
        console.log(this.cartItems);
    };
    return indexsample;
}());
