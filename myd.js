var myd = angular.module('myd', ['ngResource', 'ngRoute', 'ngSanitize', 'firebase'])
.run(['$rootScope',

    function ($rootScope) {
     	console.log("9/10/16");

     	$rootScope.currentLink = [];

     	for(var x = 0; x < 7; x++) {
     		$rootScope.currentLink[x] = false;
     	}

     	$rootScope.setCurrentLink = function(i){
     		for(var x = 0; x < 7; x++) {
     			$rootScope.currentLink[x] = false;
     		}
     		$rootScope.currentLink[i] = true;
     	}
	}
]);