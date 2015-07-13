/// <reference path="../../../typings/tsd" />

export interface GlobalHeaderModel {
	userId: string;
}

class GlobalHeaderDirective {
	public static componentName = 'tgfGlobalHeader';
	public static getDdo(): ng.IDirective {
		return {
			restrict: 'E',
			scope: {
				model: '=tgfGlobalHeaderModel'	
			},
			controller: GlobalHeaderDirectiveCtrl,
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: 'ts/common/globalHeader.directive.html',
			compile: () => {
				return {
					preLink: () => {},
					postLink: () => {}
				}
			}
		};
	}
}

class GlobalHeaderDirectiveCtrl {
	public model: GlobalHeaderModel;
}

angular.module('myApp').directive(
	GlobalHeaderDirective.componentName, 
	GlobalHeaderDirective.getDdo);
