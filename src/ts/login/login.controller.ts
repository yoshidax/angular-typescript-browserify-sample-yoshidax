/// <reference path="../../../typings/tsd" />

import angular = require('angular');
import GlobalHeaderDirective = require('../common/globalHeader.directive');
import LoginDirective = require('../common/login.directive');

interface LoginCtrlModel {
	globalHeaderModel: GlobalHeaderDirective.GlobalHeaderModel;
	loginModel: LoginDirective.LoginModel;
}

class LoginCtrl {

	public static componentName = 'LoginCtrl';
	public static $inject = ['$scope'];

	public model: LoginCtrlModel = {
		loginModel: {
			userId: null,
			password: null
		},
		globalHeaderModel: {
			userId: null
			// headerString: 'sample'
		}
	};

 	constructor($scope: ng.IScope) {
		 let userId = 'bbbbbb';
		 let password = 'vvvvvv';

		 this.model.loginModel.userId = userId;
		 this.model.loginModel.password = password;
		 this.model.globalHeaderModel.userId = userId;

		 $scope.$watch('vm.model.loginModel.userId',
			 () => {
				 this.model.globalHeaderModel.userId = this.model.loginModel.userId;
			 });
	}
}

import '../common/globalHeader.directive';
import '../common/login.directive';

export = LoginCtrl;
