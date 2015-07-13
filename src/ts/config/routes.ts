/// <reference path="../../../typings/tsd" />

import angular = require('angular');
import ngRoute = require('angular-route');

import MainCtrl = require('../main/main.controller');
import LoginCtrl = require('../login/login.controller');

function routes(): void {
	angular.module('myApp').config((
			$routeProvider: ng.route.IRouteProvider
		) => {
			$routeProvider.when('/', {
				template: ['<p>{{vm.say("hello")}}</p>'].join(),
				controller: MainCtrl,
				controllerAs: 'vm'
			});
			$routeProvider.when('/login', {
				templateUrl: 'ts/login/login.controller.html',
				controller: LoginCtrl,
				controllerAs: 'vm'
			});
		});
}

export = routes;
