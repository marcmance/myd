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
        ).when('/travel',
            {
                templateUrl: 'views/travel.html',
                controller: 'travelController'
            }
        ).when('/schedule',
            {
                templateUrl: 'views/schedule.html',
                controller: 'scheduleController'
            }
        ).when('/registry',
            {
                templateUrl: 'views/registry.html',
                controller: 'registryController'
            }
        )
        .otherwise({ redirectTo: '/' });
    }
]);