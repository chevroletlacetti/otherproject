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
