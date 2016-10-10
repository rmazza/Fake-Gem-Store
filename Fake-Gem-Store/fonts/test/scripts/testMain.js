var myApp = angular.module("myApp",[]);

// myApp.directive('myExample',function(){
//     return {
//         template: '<div> My Example Directive here! </div>'
//     };
// });


var gems = [
{
    name: "Deodecahedron",
    price: 12.95,
    description: 'Some gems have hidden qualitites beyond their lustre, beyond their shine...',
    quantity: 0,
    canPurchase: true,
    soldOut: false,
    images: [
    {
        full: "full1",
        thumb: "http://virtualmathmuseum.org/Polyhedra/Dodecahedron/Dodecahedron.png"
    }],
    reviews: [
    {
        stars: 5,
        body: "i love this product!",
        author: "robertmazza1@gmai.com"
    }]
    
},
{
    name: "Pyrite",
    price: 9.99,
    description: "The mineral pyrite, or iron pyrite, also known as fool's gold",
    quantity: 0,
    canPurchase: true,
    soleOut: false,
    images: [
    {
        full: "stonefull1",
        thumb: "http://www.gemstonebuzz.com/files/gemstone/pyrite-cube.jpg"
    }],
    reviews: [
    {
        stars: 5,
        body: "i love this product!",
        author: "robertmazza1@gmai.com"
    },
    {
        stars: 2,
        body: "terrible product",
        author: "fake@gmail.com"
    }]
}
,
{
    name: "Silver",
    price: 30.00,
    description: "Silver is the metallic element with the atomic number 47. ",
    quantity: 0,
    canPurchase: true,
    soleOut: false,
    images: [
    {
        full: "stonefull1",
        thumb: "http://www.ibmse.eu/dict/Silver-Rock.jpg"
    }],
    reviews: [
    {
        stars: 5,
        body: "i love this product!",
        author: "robertmazza1@gmai.com"
    },
    {
        stars: 2,
        body: "terrible product",
        author: "fake@gmail.com"
    }]
}
,
{
    name: "Gold",
    price: 50.00,
    description: "Gold is a chemical element with the symbol Au and the atomic number 79",
    quantity: 0,
    canPurchase: true,
    soleOut: false,
    images: [
    {
        full: "stonefull1",
        thumb: "https://staticseekingalpha.a.ssl.fastly.net/uploads/2016/2/8476581_14567753931415_rId8.jpg"
    }],
    reviews: [
    {
        stars: 5,
        body: "i love this product!",
        author: "robertmazza1@gmai.com"
    },
    {
        stars: 2,
        body: "terrible product",
        author: "fake@gmail.com"
    }]
}
,
{
    name: "Iron",
    price: 15.99,
    description: "Iron is a chemical element with symbol Fe and atomic number 26",
    quantity: 0,
    canPurchase: true,
    soleOut: false,
    images: [
    {
        full: "stonefull1",
        thumb: "http://www.graycell.ru/picture/big/zhelezo2.jpg"
    }],
    reviews: [
    {
        stars: 5,
        body: "i love this product!",
        author: "robertmazza1@gmai.com"
    },
    {
        stars: 2,
        body: "terrible product",
        author: "fake@gmail.com"
    }]
},
{
    name: "Copper",
    price: 8.88,
    description: "Copper is a chemical element with symbol Cu and atomic number 29.",
    quantity: 0,
    canPurchase: true,
    soleOut: false,
    images: [
    {
        full: "stonefull1",
        thumb: "https://upload.wikimedia.org/wikipedia/commons/f/f0/NatCopper.jpg"
    }
    ],
    reviews: [
    {
        stars: 5,
        body: "i love this product!",
        author: "robertmazza1@gmai.com"
    }]
}];

myApp.controller('myController', function($scope){
        $scope.model = gems;

        $scope.decreaseQuantity = function(gem) {
            this.gem.quantity++;
        };
});

myApp.controller("PanelController", function(){
    this.tab = 3;

    this.selectTab = function(setTab) {
        this.tab = setTab;
    };

    this.isSelected = function(checkTab){
        return this.tab === checkTab;
    };

});

myApp.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {

        if(!product.reviews)
            product.reviews = [];

            
        product.reviews.push(this.review);
        this.review = {};
    }
});