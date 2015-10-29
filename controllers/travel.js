myd.controller('travelController', ['$scope', '$rootScope', '$route', '$firebaseObject', '$firebaseArray', function ($scope, $rootScope, $route, $firebaseObject, $firebaseArray) {

    /*var ref = new Firebase("https://marcandjennyromance.firebaseio.com/person/" + $route.current.params.id);
    $scope.person = $firebaseObject(ref);*/

    console.log("travel");
    $rootScope.setCurrentLink(3);

}]);