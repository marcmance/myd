myd.controller('rsvplistController', ['$scope', '$rootScope', '$route', '$firebaseObject', '$firebaseArray', function ($scope, $rootScope, $route, $firebaseObject, $firebaseArray) {

    var ref = new Firebase("https://maharlikaydamian.firebaseio.com/rsvp/");
    $scope.rsvplist = $firebaseArray(ref);

}]);
