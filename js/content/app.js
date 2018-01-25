(function (appSettings) {
	angular
		.module('app', ['ngRoute', 'ui.router', 'ngValidate', 'ngStorage', 'base64'])
		.config(config)
		run(run);


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

			});

		$urlRouterProvider.otherwise('/');
	}
	run.$inject = ['$rootScope'];

	function run($rootScope) {
		$rootScope.appSettings = appSettings;
	}
})({
	baseApiUrl: 'https://my-json-server.typicode.com/chevroletlacetti/otherproject/'
});
