(function() {
    var tinyHall = {
        templateUrl: "partials/tinyHall.template.html",
        controller: function(HallOfFameService) {
            var $ctrl = this;
            HallOfFameService.getTinyHallOfFame().then(function(tempF) {
                $ctrl.tempC = (tempF -32)*.5559;
                console.log($ctrl.tempC);
            });
        }
    }

    angular.module("hallOfFame")
        .component("tinyHall", tinyHall);
})();
