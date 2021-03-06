var app = angular.module('store-products',[]);


app.directive("productPanels",function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/section.html',
        controller: function(){
            this.tab = 3;

            this.selectTab = function(setTab) {
                this.tab = setTab;
            };

            this.isSelected = function(checkTab){
                return this.tab === checkTab;
            };
        },
        controllerAs: 'panel'
    };
});

app.directive("panelHeader", function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/panelHead.html'
    };
});

app.directive("productPrice",function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/productPrice.html'
    };
});

app.directive("productImage",function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/productImg.html'
    };
});

app.directive("submitButton", function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/button.html'
    };
});

app.directive("gemBox",function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/gemBox.html'
    };
});