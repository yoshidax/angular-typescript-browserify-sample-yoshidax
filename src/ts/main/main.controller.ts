/// <reference path="../../../typings/tsd" />

import angular = require('angular');

class MainCtrl {

	public static componentName = 'MainCtrl';
	// public static $inject = ['$scope'];
	
	constructor() {
	}
	
	say(message: string): string {
		return message;
	}
}

angular.module('myApp').controller(MainCtrl.componentName, MainCtrl);
export = MainCtrl;
