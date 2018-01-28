(function () {
	'use strict'

	angular
		.module('app')
		.directive('formInput', formInput);

	function formInput() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '/js/content/directive/form.input.directive.html',
			scope: {
				name: '@',
				secondname: '@',
				value: '=',
				type: '@',
				title: '@',
				placeholder: '@'
			}
		}
	}
})();
