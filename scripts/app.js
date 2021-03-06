(function(){
	var app = angular.module('store', []);
	
	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panels'
		};
	});
	
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
	
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	
	app.controller('StoreController', function(){
		this.products	 = gems;
	});
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'dodecahedron-01-full.jpg',
					thumb: 'dodecahedron-01-thumb.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks!",
					author: "tim@hater.com"
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'dodecahedron-02-full.jpg',
					thumb: 'dodecahedron-02-thumb.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: "yay!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "boo!",
					author: "tim@hater.com"
				}
			]
		}
	]
})();