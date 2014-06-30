'use strict';

angular.module('teamDashboardApp')
  .controller('DashboardCtrl', function ($scope) {

        $scope.teams = [];


            // team methods
        $scope.addTeam = function(team) {
            if (team) {
                $scope.teams.push({name: team, teamMem: []})

            } else {
                alert("Please enter a name")
            }
        };
        $scope.removeTeam = function() {
            var index = this.$index;
            if (confirm("Are you sure?")) {
                this.$parent.teams.splice(index,1);
            }
        }
            // Team member methods
        $scope.addTeamMem = function(name, hours) {
             if (name == undefined) {
                 alert("please enter a name");
             } else {
                 this.team.teamMem.push({name: name, hours: hours})

             }
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
