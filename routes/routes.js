myd.config(['$routeProvider',

    function ($routeProvider) {

        $routeProvider.when('/',
            {
                templateUrl: 'views/main.html',
                controller: 'mainController'
            }
        ).when('/about',
            {
                templateUrl: 'views/about.html',
                controller: 'aboutController'
            }
        ).when('/oaxaca',
            {
                templateUrl: 'views/oaxaca.html',
                controller: 'oaxacaController'
            }
        ).when('/flights',
            {
                templateUrl: 'views/flights.html',
                controller: 'flightsController'
            }
        ).when('/wheretostay',
            {
                templateUrl: 'views/hotels.html',
                controller: 'hotelsController'
            }
        ).when('/events',
            {
                templateUrl: 'views/schedule.html',
                controller: 'scheduleController'
            }
        ).when('/registry',
            {
                templateUrl: 'views/registry.html',
                controller: 'registryController'
            }
        ).when('/contactus',
            {
                templateUrl: 'views/intouch.html',
                controller: 'intouchController'
            }
        ).when('/rsvplist',
            {
                templateUrl: 'views/rsvplist.html',
                controller: 'rsvplistController'
            }
        )
        .otherwise({ redirectTo: '/' });
    }
]);
