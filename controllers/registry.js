myd.controller('registryController', ['$scope', '$rootScope', '$route', '$firebaseObject', '$firebaseArray', function ($scope, $rootScope, $route, $firebaseObject, $firebaseArray) {

    /*var ref = new Firebase("https://marcandjennyromance.firebaseio.com/person/" + $route.current.params.id);
    $scope.person = $firebaseObject(ref);*/

    console.log("registry");

    $rootScope.setCurrentLink(6);

}]);