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
