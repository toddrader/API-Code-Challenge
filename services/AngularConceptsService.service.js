(function() {
    var AngularConceptsService = function($http) {
        return {
            getAngularConcepts: getAngularConcepts
        };

        function getAngularConcepts() {
            return $http.get("data/angular-concepts.json")
                .then(function(response) {
                    return response.data;
                });
        }
    };

    angular.module("hallOfFame")
        .factory("AngularConceptsService", AngularConceptsService);
})();