myd.controller('oaxacaController', ['$scope', '$rootScope', '$route', '$firebaseObject', '$firebaseArray', function ($scope, $rootScope, $route, $firebaseObject, $firebaseArray) {

    /*var ref = new Firebase("https://marcandjennyromance.firebaseio.com/person/" + $route.current.params.id);
    $scope.person = $firebaseObject(ref);*/

    console.log("oaxaca");
    $rootScope.setCurrentLink(2);

}]);