angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider, $locationProvider){
	$routeProvider
		//when sending user to home user this page
		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'MainController', //you can put this here or in the html file
			controllerAs: 'main'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html'
		})
		.when('/signup', {
			templateUrl: 'app/views/pages/signup.html'
		})
		.when('/all_stories', {
			templateUrl: 'app/views/pages/allStories.html',
			controller: 'AllStoriesController',
			controllerAs: 'story',
			resolve: {
				stories: function(Story) {
					return Story.allStories();
				}
			}
		});


	$locationProvider.html5Mode(true);

});