(function() {
    var tinyHall = {
        templateUrl: "partials/tinyHall.template.html",
        controller: function(HallOfFameService) {
            var $ctrl = this;
            HallOfFameService.getTinyHallOfFame().then(function(rows) {
                $ctrl.rows = rows;
                console.log((rows -32)*.5559);
            });
        }
    }

    angular.module("hallOfFame")
        .component("tinyHall", tinyHall);
})();
