(function() {
    var HallOfFameService = function($http) {
        return {
            getCompleteHallOfFame: getCompleteHallOfFame,
            getTinyHallOfFame: getTinyHallOfFame
        };

        function getCompleteHallOfFame() {
            return $http.get("http://forecast.weather.gov/MapClick.php?lat=42.335993&lon=-83.049806&FcstType=json")
                .then(function(response) {
                    return response.data.currentobservation.Temp;
                });
        }

        function getTinyHallOfFame() {
          return $http.get("http://forecast.weather.gov/MapClick.php?lat=42.335993&lon=-83.049806&FcstType=json")
              .then(function(response) {
                  return response.data.currentobservation.Temp;
              });
        }
    };

    angular.module("hallOfFame")
        .factory("HallOfFameService", HallOfFameService);
})();
