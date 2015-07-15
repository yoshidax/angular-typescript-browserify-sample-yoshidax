/// <reference path="../../../typings/tsd" />

export interface LoginModel {
	userId: string;
	password: string;
	onSubmit: (userId: string, password: string) => void
}

class LoginDirective {
	public static componentName = 'tgfLogin';
	public static getDdo(): ng.IDirective {
		return {
			restrict: 'E',
			scope: {
				model: '=tgfLoginModel'	
			},
			controller: LoginDirectiveCtrl,
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: 'ts/common/login.directive.html',
			compile: () => {
				return {
					preLink: () => {},
					postLink: () => {}
				}
			}
		};
	}
}

class LoginDirectiveCtrl {
	
	public model: LoginModel;

	constructor(private $log: ng.ILogService) {}

	public login(): void {
		this.model.onSubmit(this.model.userId, this.model.password);
	}
}

angular.module('myApp').directive(
	LoginDirective.componentName, LoginDirective.getDdo);