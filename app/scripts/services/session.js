'use strict';

angular.module('teamDashboardApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
