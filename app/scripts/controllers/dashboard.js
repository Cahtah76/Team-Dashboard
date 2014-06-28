'use strict';

angular.module('teamDashboardApp')
  .controller('DashboardCtrl', function ($scope) {

        $scope.teams = [[{name: 'adam', hours: "3,6"}],[{name: 'andrew', hours: "3,6"}]];



        $scope.addTeam = function(name, hours) {
            $scope.teams.push([{name: name, hours: hours}])
        };

  });
