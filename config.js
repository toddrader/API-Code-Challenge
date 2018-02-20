(function() {
    angular.module("hallOfFame")
    .config(function($routeProvider) {
        $routeProvider
        .when("/angular", {
            template: "<angular-concepts></angular-concepts>"
        })
        .when("/complete", {
            template: "<complete-hall></complete-hall>"
        })
        .when("/tiny", {
            template: "<tiny-hall></tiny-hall>"
        })
        .otherwise({ redirectTo: "/complete" });
    });
})();
