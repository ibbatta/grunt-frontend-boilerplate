'use strict';

require.config({
    shim: {
        angular: {
            deps: [
                'jquery'
            ],
            exports: 'angular'
        }
    },
    paths: {
        angular: 'app/bower_components/angular/angular',
        'angular-bootstrap': 'app/bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-ui-router': 'app/bower_components/angular-ui-router/release/angular-ui-router',
        'bootstrap-sass': 'app/bower_components/bootstrap-sass/assets/javascripts/bootstrap',
        jquery: 'app/bower_components/jquery/dist/jquery',
        'angular-mocks': 'app/bower_components/angular-mocks/angular-mocks',
        'angular-animate': 'app/bower_components/angular-animate/angular-animate',
        'ng-lodash': 'app/bower_components/ng-lodash/build/ng-lodash'
    },
    packages: [

    ]
});
