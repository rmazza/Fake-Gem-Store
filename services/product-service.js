angular.module("myApp")
    .factory('productService', function productServiceFactory($http) {
        return {
            get: function () {
                return $http({ method: 'GET', url: 'http://localhost:61036/api/products' });
            }
        };
    });

//angular.module("myApp")
//    .factory('reviewService', function reviewServiceFactory($http) {
//        return {
//            post: function () {
//                return $http({ method: 'POST', url: 'http://localhost:61036/api/review' })
//            }
//        };
//    });