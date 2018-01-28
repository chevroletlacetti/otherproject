(function () {
	'use strict';
	angular
		.module('app')
		.controller('contactsController', contactsController);

	contactsController.$inject = ['$scope', 'contactsService'];

	function contactsController($scope, contactsService) {
		$scope.validationOptions = {
			rules: {
				phone: {
					tel: true,
					required: true
				},
				name: {
					required: true
				},
				secondname: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		};

		$scope.send = function (form) {
			if (!form.validate()) {
				return false;
			}

			contactsService.send({
					name: $scope.model.name,
					phone: $scope.model.phone,
					email: $scope.model.email,
					message: $scope.model.message
				},
				function () {
					$scope.messageSent = true;
				}
			);
		}

		$scope.reset = function () {
			$scope.model = {};
			$scope.messageSent = false;
		}
	}

})();
