var reviewApp = angular.module('product-reviews',[]);

reviewApp.controller("ReviewController", ['$http', function($http) {
    this.review = {};

    this.addReview = function(product) {
        
        $http.post('/api/review', product);

        product.reviews.push(this.review);
        this.review = {};
    }
    
}]);