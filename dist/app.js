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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ({

/***/ 88:
/***/ (function(module, exports) {

(function (appSettings) {
	angular
		.module('app', ['ngRoute', 'ui.router', 'ngValidate', 'ngStorage', 'base64'])
		.config(config)
		.run(run);


	config.$inject = ['$stateProvider', '$urlRouterProvider', '$validatorProvider', '$httpProvider', '$localStorageProvider'];

	function config($stateProvider, $urlRouterProvider, $validatorProvider, $httpProvider, $localStorageProvider) {
		$stateProvider
			.state('about', {
				url: '/',
				templateUrl: '/js/content/about/about.view.html',
				controller: 'aboutController'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: '/js/content/blog/blog.view.html',
				controller: 'blogController'

			})
			.state('blog.item', {
				url: "^/blog/{id:int}",
				onEnter: ['$state', '$stateParams', '$http', '$compile', '$rootScope', 'blogService', function ($state, $stateParams, $http, $compile, $rootScope, blogService) {
					blogService.get($stateParams.id, function (blog) {
						$http.get('/js/content/blog/blog-modal.view.html')
							.then(function (response) {
								var scope = $rootScope.$new(true);
								scope.model = blog;
								$('<div/>').modal({
									onRenderContent: function () {
										return $compile(response.data)(scope);
									},
									onClose: function () {
										$state.go('^');
									}
								});
							});
					});
				}]
			})
			.state('contacts', {
				url: '/contacts',
				templateUrl: '/js/content/contacts/contacts.view.html',
				controller: 'contactsController'

			})

		.state('gallery', {
			url: '/gallery',
			templateUrl: '/js/content/gallery/gallery.view.html',
			controller: 'galleryController'

		});

		$urlRouterProvider.otherwise('/');

		$validatorProvider.setDefaults({
			errorElement: 'span'
		});
		$validatorProvider.setDefaultMessages({
			required: 'Это поле обязательно для заполнения.',
			email: 'Неверный формат email-адреса.'
		});
		$validatorProvider.addMethod('tel', function (value, element) {
			return /\+375\([0-9]{2}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/.test(value);
			//			/^\+375\\([0-9]{2}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/
		}, 'Неверный формат номера телефона.');
	}
	run.$inject = ['$rootScope'];

	function run($rootScope) {
		$rootScope.appSettings = appSettings;
	}
})({
	baseApiUrl: "https://my-json-server.typicode.com/chevroletlacetti/otherproject/"
});


/***/ })

/******/ });