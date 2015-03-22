angular
  .module('dj_angular_boilerplate', []);

(function () {
  'use strict';

  angular
    .module('dj_angular_boilerplate', [
      'dj_angular_boilerplate.routes',
      'dj_angular_boilerplate.authentication'
    ]);

  angular
    .module('dj_angular_boilerplate.routes', ['ngRoute']);
})();

angular
  .module('dj_angular_boilerplate', [
    'dj_angular_boilerplate.config',
    // ...
  ]);

angular
  .module('dj_angular_boilerplate.config', []);

angular
  .module('dj_angular_boilerplate')
  .run(run);


run.$inject = ['$http'];

/**
* @name run
* @desc Update xsrf $http headers to align with Django's defaults
*/
function run($http) {
  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}