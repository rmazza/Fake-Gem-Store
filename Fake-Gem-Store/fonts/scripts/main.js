var myApp = angular.module("myApp", ['store-products', 'product-reviews']);

myApp.controller('myController', ['$http', '$log', '$scope', 'productService','Gravatar', function ($http, $log, $scope, productService, Gravatar) {
    $scope.model = [];

    $scope.gravatarUrl = function(email){
        return Gravatar(email);
    };

    productService.get()
        .then(function (response) {

        $scope.model = response.data;

        $scope.decreaseQuantity = function (gem) {
            this.gem.quantity++;
        };

    }, function (response) {
        //Second function handles error
        $log.log(response.data);
    });

}]);