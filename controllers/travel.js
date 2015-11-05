myd.controller('travelController', ['$scope', '$rootScope', '$route', '$firebaseObject', '$firebaseArray', '$window',
	function ($scope, $rootScope, $route, $firebaseObject, $firebaseArray, $window) {

    /*var ref = new Firebase("https://marcandjennyromance.firebaseio.com/person/" + $route.current.params.id);
    $scope.person = $firebaseObject(ref);*/

    console.log("travel");
    $rootScope.setCurrentLink(3);

    $scope.goTo = function(url) {
    	console.log("?");
    	$window.open(url);
    }

}]);