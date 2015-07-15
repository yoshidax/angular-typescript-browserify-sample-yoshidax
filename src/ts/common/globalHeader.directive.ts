/// <reference path="../../../typings/tsd" />

export interface GlobalHeaderModel {
	userId?: string;
	headerString?: string;
}

interface GlobalHeaderScope extends ng.IScope {
	vm:  {
		model: GlobalHeaderModel;
	}
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
					pre: (scope, iElement, iAttrs, controller) => {
					},
					post: (scope, iElement, iAttrs, controller) => {
					}
				}
			}
		};
	}
}

class GlobalHeaderDirectiveCtrl {
	public model: GlobalHeaderModel;
	constructor() {
		this.initVmValue();
	}
	private initVmValue(): void {
	    if (!('userId' in this.model)) {
	        this.model.userId = 'TEST';
	    }
	    if (!('headerString' in this.model)) {
	        this.model.headerString = 'TEST';
	    }
	}
}

angular.module('myApp').directive(
	GlobalHeaderDirective.componentName, 
	GlobalHeaderDirective.getDdo);
