angular.module("myApp")
    .factory('productService', function productServiceFactory($http) {
        return {
            get: function () {
                return $http({ method: 'GET', url: '../d/products.json' });
            }
        };
    });