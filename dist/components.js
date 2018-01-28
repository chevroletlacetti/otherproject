/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ({

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
__webpack_require__(91);
__webpack_require__(92);
__webpack_require__(93);
__webpack_require__(94);
__webpack_require__(95);
__webpack_require__(96);
__webpack_require__(97);
__webpack_require__(98);
module.exports = __webpack_require__(99);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

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


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

(function () {
	'use strict';

	angular
		.module('app')
		.controller('blogController', blogController);

	blogController.$inject = ['$scope', '$http', 'blogService']

	function blogController($scope, $http, blogService) {
		blogService.getBlogItems(function (items) {
			$scope.blogItems = items;
		});
	}

})();


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

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


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

(function () {
	'use strict';

	angular
		.module('app')
		.controller('mapController', mapController);

	mapController.$inject = ['$scope', '$timeout'];

	function mapController($scope, $timeout) {
		$scope.map = {
			routes: [],
			onGetPosition: function (coords) {
				$scope.map.routes.push({
					points: [
						[coords.latitude, coords.longitude],
						[53.918474, 27.583611],
						['Академия наук Минск']
					]
				});
				$scope.$apply();
			}
		}
	}
})();


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

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


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

(function () {
	'use strict';

	angular
		.module('app')
		.directive('map', map);

	var defaultSettings = {
		center: [53.918474, 27.583611],
		zoom: 12
	};

	function map() {
		return {
			restrict: 'E',
			scope: {
				settings: '=',
				onGetPosition: '&'
			},
			transclude: true,
			link: function ($scope, element, attrs, ctrl, transcludeFn) {
				transcludeFn(function (copy) {
					element.append(copy);
				});
			},
			controller: ['$scope', '$element', function ($scope, $element) {
				var self = this;
				ymaps.load().then(function (ymaps) {
					ymaps.ready(function () {
						var map = new ymaps.Map($element[0], angular.extend({}, defaultSettings, $scope.settings));
						$scope.$broadcast('ready');
						if ($scope.onGetPosition && navigator.geolocation) {
							navigator.geolocation.getCurrentPosition(function (position) {
								$scope.onGetPosition({
									coords: position.coords
								});
							}, function (error) {
								console.log(error.message);
							});
						}

						self.addRoute = function (points) {
							var multiRoute = new ymaps.multiRouter.MultiRoute({
								referencePoints: points,
								params: {
									routingMode: 'pedestrian'
								}
							}, {
								boundsAutoApply: true
							});
							map.geoObjects.add(multiRoute);
							return multiRoute;
						}

						self.removeRoute = function (route) {
							map.geoObjects.remove(route);
						}

						self.addMarker = function (coordinates) {
							var placeMark = new ymaps.Placemark(coordinates);
							$scope.markers.add(placeMark);

							return placeMark;
						};

						self.removeMarker = function (marker) {
							$scope.geoObjects.remove(marker);
						};
					});
				});
			}]
		}
	}
})();


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

(function () {
	'use strict'
	angular

		.module('app')
		.directive('modal', modal);

	function modal() {

		return {restrict: 'A',
			link: function (scope, element, attrs) {
				element.on('click', function () {
					$(element).modal();
				});
			}
		}
	}
})();


/***/ }),

/***/ 97:
/***/ (function(module, exports) {



/***/ }),

/***/ 98:
/***/ (function(module, exports) {

(function () {
	'use strict'

	angular
		.module('app')
		.factory('blogService', blogService);

	blogService.$inject = ['$http', '$rootScope']

	function blogService($http, $rootScope) {
		var service = {
			getBlogItems: function (successCallback) {
				$http({
						url: $rootScope.appSettings.baseApiUrl + 'blog-items',
						method: 'GET'
					})
					.then(function (response) {
						successCallback(response.data);
					})
			}
		};

		return service;
	}
})();


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

(function () {
	'use strict'
	var lastId = 1000;
	angular
		.module('app')
		.factory('contactsService', contactsService);

	contactsService.$inject = ['$http', '$rootScope']

	function contactsService($http, $rootScope) {
		var service = {
			send: function (message, successCallback) {
				var data = Object.assign({
					id: lastId++
				}, message);
				$http({
						url: $rootScope.appSettings.baseApiUrl + 'messages',
						method: 'POST',
						data: data
					})
					.then(function (response) {
						successCallback(response.data);
					})
			}
		};

		return service;
	}
})();


/***/ })

/******/ });