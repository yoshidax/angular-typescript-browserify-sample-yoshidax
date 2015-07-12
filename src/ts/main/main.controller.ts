/// <reference path="../../../typings/tsd" />

import angular = require('angular');

class MainCtrl {

	public static componentName = 'MainCtrl';
	
	// private static $inject = ['$scope'];

	constructor($scope: ng.IScope) {
	}
	
	say(message: string): string {
		return message;
	}
}

// function MainCtrl($scope: ng.IScope) {
// 	this.$scope = $scope;
// }
// MainCtrl.prototype.say = (msg: string) => console.log(msg);

export = MainCtrl;

// [MEMO] 2番目の引数型はFunctionであり外部モジュールでrequireすると型が合わない
//        従ってやりたくはないがany[]で逃げた。ほんとはやりたくない。。
angular.module('myApp').controller(MainCtrl.componentName, MainCtrl);

