myd.controller('intouchController', ['$scope', '$rootScope', '$route', '$firebaseObject', '$firebaseArray', function ($scope, $rootScope, $route, $firebaseObject, $firebaseArray) {

    var ref = new Firebase("https://maharlikaydamian.firebaseio.com/rsvp/");
    $scope.rsvp = $firebaseArray(ref);

    $rootScope.setCurrentLink(7);

    $scope.rsvpForm = {
        fullname: "",
        email: "",
        arrival: "",
        departure: "",
        hotel: "",
        mole: 0,
        pork: 0,
        tuna: 0
    }

    $scope.formError = false;
    $scope.thankYou = false;

    $scope.submit = function() {
        if($scope.rsvpForm.fullname !== '' && $scope.rsvpForm.email !== '' && $scope.rsvpForm.arrival !== '' &&
            $scope.rsvpForm.departure !== '' && $scope.rsvpForm.hotel !== '')
        {

            if($scope.rsvpForm.mole === 0 && $scope.rsvpForm.pork === 0 && $scope.rsvpForm.tuna === 0) {
                $scope.formError = true;
            }
            else {
                $scope.rsvp.$add($scope.rsvpForm);
                $scope.formError = false;
                $scope.thankYou = true;
            }

        }
        else {
            $scope.formError = true;
        }
    }

}]);
