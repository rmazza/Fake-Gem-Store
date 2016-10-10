var reviewApp = angular.module('product-reviews',[]);

reviewApp.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {

        if(!product.reviews)
            product.reviews = [];

            
        product.reviews.push(this.review);
        this.review = {};
    }
});