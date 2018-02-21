(function() {
    var completeHall = {
        templateUrl: "partials/completeHall.template.html",
        controller: function(HallOfFameService, $timeout) {
            var $ctrl = this;


            HallOfFameService.getCompleteHallOfFame().then(function(rows) {
                $ctrl.rows = rows;
                console.log(rows);
            });
        }
    }

    angular.module("hallOfFame")
        .component("completeHall", completeHall);
})();
