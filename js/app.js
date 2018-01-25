(function (appSettings) {
	angular
		.module('app', ['ngRoute', 'ui.router', 'ngStorage'])
		.config(config)
		.run(run);

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider' '$localStorageProvider'];

	function config($stateProvider, $urlRouterProvider, httpProvider, $localStorageProvider) {
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
	//	run.$inject = ['rootScope'];
	//	function run($rootScope) {
	//		$rootScope.appSettings = appSettings;
	//	}
})({
	baseApiUrl: 'https://my-json-server.typicode.com/chevroletlacetti/other-project/'
});
