myd.controller('hotelsController', ['$scope', '$rootScope', '$route', '$firebaseObject', '$firebaseArray', '$window', function ($scope, $rootScope, $route, $firebaseObject, $firebaseArray, $window) {

    /*var ref = new Firebase("https://marcandjennyromance.firebaseio.com/person/" + $route.current.params.id);
    $scope.person = $firebaseObject(ref);*/

    console.log("hotels");

    $rootScope.setCurrentLink(4);

    $scope.goTo = function(url) {
    	console.log("?");
    	$window.open(url);
    }

}]);