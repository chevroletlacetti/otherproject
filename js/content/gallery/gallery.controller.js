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
