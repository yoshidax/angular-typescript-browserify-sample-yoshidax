/// <reference path="../../../typings/tsd" />
var angular = require('angular');
var MainCtrl = (function () {
    /*@ngInject*/
    function MainCtrl($scope) {
    }
    MainCtrl.componentName = 'MainCtrl';
    return MainCtrl;
})();
exports.MainCtrl = MainCtrl;
angular.module('myApp')
    .controller(MainCtrl.componentName, MainCtrl);
module.exports = MainCtrl;
