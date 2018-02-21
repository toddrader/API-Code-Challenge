(function() {
    var completeHall = {
        templateUrl: "partials/completeHall.template.html",
        controller: function(HallOfFameService, $timeout) {
            var $ctrl = this;
              HallOfFameService.getCompleteHallOfFame().then(function(tempF) {
                $ctrl.tempF = tempF;
                console.log(tempF);
            });
        }
    }

    angular.module("hallOfFame")
        .component("completeHall", completeHall);
})();
