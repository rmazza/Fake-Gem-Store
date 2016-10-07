angular.module('myApp')
    .factory('Gravatar',function gravatarFactory(){
        var avatarSize = 80;
        var avatarUrl = "http://www.gravatar.com/avatar/";
        return function(email){
                return avatarUrl + CryptoJS.MD5(email).toString() + "?size" + avatarSize.toString();
        };
    });