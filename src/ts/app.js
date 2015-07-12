/// <reference path="../../typings/tsd" />
var angular = require('angular');
var ngRoute = require('angular-route');
var mainCtrl = require('./main/main.controller');
angular
    .module('myApp', [ngRoute])
    .config(function ($routeProvider) {
    $routeProvider.when('/', {
        template: ['<p>foo bar</p>'].join(),
        controller: mainCtrl.componentName,
        controllerAs: 'vm'
    });
});
