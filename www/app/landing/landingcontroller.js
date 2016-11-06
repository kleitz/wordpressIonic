'use strict';
(function(){
	angular.module('eCommerce')
	.controller('landingCtrl', ['$scope','$state','$ionicModal','Auth',
		'$ionicLoading','AuthSession','$ionicPopup',
		function ($scope,$state,$ionicModal,Auth,$ionicLoading,AuthSession,$ionicPopup) {
			$scope.user = {},
			$scope.IsSignIn,
			$scope.formTitle;

			$scope.$on('$ionicView.loaded', function(){

			});

			$scope.$on('$ionicView.afterEnter', function(){


			});

			

			$ionicModal.fromTemplateUrl('app/modals/sign-in-modal.html', {
				scope: $scope
			}).then(function(modal) {
				$scope.loginModal = modal;
			});

			
			$scope.startShopping=function(){
				$state.go('app.category');
			};

			



		}])
	


})()