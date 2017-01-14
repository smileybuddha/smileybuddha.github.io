'use strict';


var app = angular.module('myApp', [
  'ngRoute'
]);



app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    
    // Blog
    
.when("/", {templateUrl: "view/homepage.html", controller: "BlogCtrl"})
.when("/about", {templateUrl: "view/about.html", controller: "BlogCtrl"})
.when("/blog", {templateUrl: "view/blog.html", controller: "BlogCtrl"})
.when("/contact", {templateUrl: "view/contact.html", controller: "BlogCtrl"})
.when("/view1", {templateUrl: "view1/view1.html", controller: "BlogCtrl"})
.when("/view2", {templateUrl: "view2/view2.html", controller: "BlogCtrl"})
.when("/resume", {templateUrl: "view/resume.html", controller: "BlogCtrl"})
.otherwise("/404", {templateUrl: "view/resume.html", controller: "BlogCtrl"});


}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});
