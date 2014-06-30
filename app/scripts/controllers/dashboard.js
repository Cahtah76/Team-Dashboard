'use strict';

angular.module('teamDashboardApp')
  .controller('DashboardCtrl', function ($scope) {

        $scope.teams = [{name: 'adam', teamMem: [{name: "adam", hours: '7-3'}]}];



        $scope.addTeam = function(team) {
            $scope.teams.push({name: team, teamMem: []})
        };

        $scope.addTeamMem = function(name, hours) {

            this.team.teamMem.push({name: name, hours: hours})
//            console.log(this.team.teamMem);
        };
        $scope.removeTeamMem = function(name, hours) {
            var index = this.$index;
            this.$parent.team.teamMem.splice(index,1);

        };

  });
