var app = angular.module('HomePage', ['ngCookies']);
app.controller('MainController', ['$scope', '$cookies', function ($scope, $cookies) {
    $scope.init = function(){
        console.log('Init home page');
    };
}]);
var listIScroll = [];
$(document).ready(function(){
    $( ".brick-row" ).each(function( index ) {
        var row = this;
        var rowScroll = new IScroll(this,{
            scrollX: true,
            scrollY: false,
            mouseWheel: false,
            deceleration: 0.001
        });
        rowScroll.on('scrollStart',function(){

        });
        rowScroll.on('scrollEnd',function(){
            //rowScroll.scrollTo(0,rowScroll.y, 300);
        });
        listIScroll.push(rowScroll);
    });

    new IScroll('.main-container',{
        scrollX: false,
        scrollY: true,
        mouseWheel: true,
        scrollbars: true
    });
});