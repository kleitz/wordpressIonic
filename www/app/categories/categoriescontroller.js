'use strict';
(function(){
	angular.module('eCommerce')
	.controller('categoriesCtrl', ['$scope','productService','$ionicLoading', '$sce', '$http',
		function ($scope,productService,$ionicLoading, $sce, $http) {
			$scope.siteCategories = [];
			$scope.featuredCategory =[];
			$scope.categories = [];
			$scope.loaded = false;

			$scope.$on('$ionicView.loaded', function(){
				$ionicLoading.show({
					template:'Loading..'
				});
			});

			$scope.$on('$ionicView.afterEnter', function(){

				getCategories();


			});

			function getCategories(){
				productService.getCategories().then(function(data){
					$scope.featuredCategory = _.where(data.data.categories, {isPromo: "1"});
					//console.log($scope.featuredCategory);
					$scope.categories = _.where(data.data.categories, {isPromo: "0"});
					//console.log("$scope.categories",$scope.categories);
					setTimeout(function(){
						$scope.loaded =true;
						$ionicLoading.hide();
					});
					
				},function(){
					$ionicLoading.hide();
				})
			};

			$http.get("http://allfashion.mobiproj.com/wp-json/wp/v2/categories/").then(
				function(returnedData){
					$scope.siteCategories = returnedData.data;
					$scope.siteCategories.forEach(function(element, index, array){
						element.title = $sce.trustAsHtml(element.title);
					})
					console.log($scope.siteCategories);
					console.log(returnedData.data);
					//console.log(returnedData.data[2].Array);

				}, function(err){
					console.log(err);
			})
		}])
	


})()