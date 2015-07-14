/// <reference path="../../../typings/tsd" />

export interface GlobalHeaderModel {
	userId?: string;
	headerString?: string;
}

interface GlobalHeaderScope extends GlobalHeaderModel, ng.IScope {
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
			// require: '',
			compile: () => {
				return {
					pre: () => {},
					post: (scope: GlobalHeaderScope) => {
						console.log(scope.headerString);
						!scope.headerString && (scope.headerString = 'TEST');
					}
				}
			}
		};
	}
}

class GlobalHeaderDirectiveCtrl {
	public model: GlobalHeaderModel;
	constructor() {
		console.dir(this.model);
	}
}

angular.module('myApp').directive(
	GlobalHeaderDirective.componentName, 
	GlobalHeaderDirective.getDdo);
