'use strict';

angular.module('teamDashboardApp')
  .controller('DashboardCtrl', function ($scope) {

        $scope.teams = [];


            // team methods
        $scope.addTeam = function(team) {
                $scope.teams.push({name: team, teamMem: []})
                $scope.teamName = "";

        };
        $scope.removeTeam = function() {
            var index = this.$index;
            if (confirm("Are you sure?")) {
                this.$parent.teams.splice(index,1);
            }
        }
            // Team member methods
        $scope.addTeamMem = function(name, hours) {

                 this.team.teamMem.push({name: name, hours: hours});
                 $scope.memberName = "";
                 $scope.memberHours = "";
        };

        $scope.removeTeamMem = function() {
            var index = this.$index;
            this.$parent.team.teamMem.splice(index,1);

        };
            // angular dragdrop

        $scope.dropSuccessHandler = function($event,index,array){
            array.splice(index,1);
        };

        $scope.onDrop = function($event,$data,array){
            array.push($data);
        };


  });
