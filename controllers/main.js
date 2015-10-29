myd.controller('mainController', ['$scope', '$rootScope', '$route', '$firebaseObject', '$firebaseArray', function ($scope, $rootScope, $route, $firebaseObject, $firebaseArray) {

    /*var ref = new Firebase("https://marcandjennyromance.firebaseio.com/person/" + $route.current.params.id);
    $scope.person = $firebaseObject(ref);*/

    $scope.desc = false;
    $scope.showDesc = function() {
        $scope.desc = true;
    }

    $rootScope.setCurrentLink(0);

}]);