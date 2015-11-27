myd.controller('hotelsController', ['$scope', '$rootScope', '$route', '$firebaseObject', '$firebaseArray', function ($scope, $rootScope, $route, $firebaseObject, $firebaseArray) {

    /*var ref = new Firebase("https://marcandjennyromance.firebaseio.com/person/" + $route.current.params.id);
    $scope.person = $firebaseObject(ref);*/

    console.log("hotels");

    $rootScope.setCurrentLink(4);

}]);