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
			.state('contacts', {
				url: '/contacts',
				templateUrl: '/js/content/contacts/contacts.view.html',
				controller: 'contactsController'

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
			return /\+[\d\s\-]{9,}/.test(value);
		}, 'Неверный формат номера телефона.');
	}
	run.$inject = ['$rootScope'];

	function run($rootScope) {
		$rootScope.appSettings = appSettings;
	}
})({
	baseApiUrl: "https://my-json-server.typicode.com/chevroletlacetti/otherproject/"
});
