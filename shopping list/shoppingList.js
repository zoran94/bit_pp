"use strict";


(function () {

    function Product(name, price, expirationDate) {
        this.id = Math.round((Math.random() * 99999) + 10000)
        this.name = name;
        this.price = price;
        this.expirationDate = new Date(expirationDate);

        this.getInfo = function () {
            var productCode = this.name[0] + this.name[this.name.length - 1] + this.id;
            return productCode + ", " + this.name + ", " + this.id;
        };
    };

    function ShoppingBag() {
        this.productList = [];

        this.addProduct = function (product) {
            if (product.expirationDate >= new Date()) {
                this.productList.push(product);
            }
        };

        this.averagePrice = function () {
            var sum = this.calculateTotalPrice();

            return (sum / this.productList.length).toPrecision(3)
        };

        this.calculateTotalPrice = function () {
            var totalPrice = 0;

            for (var i = 0; i < this.productList.length; i++) {
                totalPrice += this.productList[i].price;
            }

            return totalPrice;
        };

        this.getMostExpensive = function () {
            var mostExpensive = this.productList[0].price;

            for (var i = 0; i < this.productList.length; i++) {
                if (mostExpensive < this.productList[i].price) {
                    mostExpensive = this.productList[i].name;
                }
            }

            return mostExpensive;
        };

    }


    function PaymentCard() {

        this.accountBalance = 200;
        this.active = true;
        this.validUntilDate = new Date("05.27.2020")
    }

    function checkoutAndBuy(userCard, userShoppingBag) {
        if (userCard.accountBalance >= userShoppingBag.calculateTotalPrice()) {
            console.log("Purchase is successfull")
        } else {
            console.log("Amount that is missing is: ", userShoppingBag.calculateTotalPrice() - userCard.accountBalance)
        }
    }

    var smoki = new Product("Smoki", 100, "08.27.2019");
    var banana = new Product("Banana", 135, "05.13.2019");
    var plazma = new Product("Plazma", 234, "11.18.2019");

    var bag = new ShoppingBag();
    bag.addProduct(banana);
    bag.addProduct(smoki);
    bag.addProduct(plazma);

    // bag.averagePrice();
    // bag.getMostExpensive();
    // bag.calculateTotalPrice();

    var masterCard = new PaymentCard();

    checkoutAndBuy(masterCard, bag);
})();

