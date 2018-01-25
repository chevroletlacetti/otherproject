(function () {
	'use strict'

	angular
		.module('app')
		.controller('aboutController', aboutController);

	aboutController.$inject = ['$scope'];

	function aboutController($scope) {
		$scope.model = {
			name: 'Вадим Стрелковский',
			birthday: '22.08.1991',
			education: 'Высшее'
		}
	}

})();
