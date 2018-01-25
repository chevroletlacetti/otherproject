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
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ({

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(105);
module.exports = __webpack_require__(106);


/***/ }),

/***/ 103:
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

/***/ 104:
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

/***/ 105:
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

/***/ 106:
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


/***/ })

/******/ });