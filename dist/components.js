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

/***/ 100:
/***/ (function(module, exports) {

(function () {
	'use strict'

	angular
		.module('app')
		.controller('menuController', menuController);

	menuController.$inject = ['$scope', 'authService'];

	function menuController($scope, authService) {
		$scope.authorized = authService.isAuthorized();
		$scope.validationOptions = {
			rules: {
				login: {
					required: true,
					email: true
				},
				password: {
					required: true
				}
			}
		};

		$scope.login = function (form) {
			if (!form.validate()) {
				return false;
			}

			authService.login({
					login: $scope.model.login,
					password: $scope.model.password
				},
				function () {
					$scope.authorized = true;
				}
			);
		}

		$scope.logout = function () {
			authService.logout();
			$scope.authorized = false;
		}
	}
})();


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

(function () {
	angular
		.module('app')
		.factory('authService', authService);

	authService.$inject = ['$localStorage', '$base64'];

	function authService($localStorage, $base64) {
		return {
			login: function (model, successCalback) {
				$localStorage.login = model.login;
				$localStorage.token = `Basic ${$base64.encode(model.login + model.password)}`;
				successCalback();
			},
			logout: function () {
				delete $localStorage.login;
				delete $localStorage.token;
			},
			isAuthorized: function () {
				return $localStorage.token !== undefined;
			}
		}
	}
})();


/***/ }),

/***/ 102:
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
			},
			get: function (id, successCallback) {
				$http({
						url: $rootScope.appSettings.baseApiUrl + 'blog-items/' + id,
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

/***/ 103:
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


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

(function () {
	'use strict'

	angular
		.module('app')
		.factory('galleryService', galleryService);

	galleryService.$inject = ['$http', '$rootScope']

	function galleryService($http, $rootScope) {
		var service = {
			getGallery: function (successCallback) {
				$http({
						url: $rootScope.appSettings.baseApiUrl + 'gallery-photos',
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
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(102);
__webpack_require__(103);
module.exports = __webpack_require__(104);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

(function () {
	'use strict'

	angular
		.module('app')
		.controller('aboutController', aboutController);

	aboutController.$inject = ['$scope', '$sessionStorage'];

	function aboutController($scope, $sessionStorage) {
		$scope.model = {
			name: 'Вадим Стрелковский',
			birthday: '22.08.1991',
			education: 'Высшее'
		}

		$scope.video = {
			time: $sessionStorage.videoTime || 0,
			sources: [{
				type: 'video/mp4',
				src: '/picture/SampleVideo_1280x720_1mb.mp4',
			}],
			onended: function () {
				$scope.video.ended = $sessionStorage.videoEnded = true;
				$scope.$apply();
			},
			ended: $sessionStorage.videoEnded,
			control: {},
			reset: function () {
				if ($scope.video.control.reset) {
					$scope.video.control.reset()
				}

				$scope.video.ended = $sessionStorage.videoEnded = false;
			}
		};

		$scope.$watch('video.time', function (newValue) {
			$sessionStorage.videoTime = newValue;
		});
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

(function () {
	'use strict'

	angular
		.module('app')
		.directive('ngVideo', video);

	function video() {
		return {
			restrict: 'E',
			scope: {
				currentTime: '=',
				sources: '=',
				onEnded: '&',
				control: '='
			},
			replace: true,
			templateUrl: '/js/content/directive/ngvideo.directive.html',
			link: function (scope, element, attrs) {
				element[0].currentTime = scope.currentTime || 0;

				var control = scope.control || {};
				control.reset = function () {
					element[0].currentTime = 0;
					element[0].play();
				}

				element[0].onended = function () {
					scope.onEnded();
				};

				element[0].ontimeupdate = function () {
					scope.currentTime = element[0].currentTime;
					scope.$apply();
				};
			}
		}
	}
})();


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

(function () {
	'user strict';
	angular
		.module('app')
		.filter('dots', dotsFilter);

	function dotsFilter() {
		return function (value, count) {
			if (!value) {
				return value;
			}
			var dotsCount = count || 3;
			for (var i = value.length - 1; value[i] === '.'; i--) {
				dotsCount--;
			}


			var output = value;
			for (var i = 0; i < dotsCount; i++) {
				output = output + '.';
			}

			return output;
		}
	}
})();


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

(function () {
	'use strict';

	angular
		.module('app')
		.controller('galleryController', galleryController);

	galleryController.$inject = ['$scope', 'galleryService']
	
	function galleryController($scope, galleryService) {
		galleryService.getGallery(function(gallery){
			$scope.gallery
			
		});
	}

})();


/***/ })

/******/ });