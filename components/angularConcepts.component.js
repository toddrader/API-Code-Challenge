(function() {
    var angularConcepts = {
        templateUrl: "partials/angularConcepts.template.html",
        controller: function(AngularConceptsService) {
            var $ctrl = this;
            AngularConceptsService.getAngularConcepts().then(function(rows) {
                $ctrl.rows = rows;
            });
        }
    }

    angular.module("hallOfFame")
        .component("angularConcepts", angularConcepts);
})();