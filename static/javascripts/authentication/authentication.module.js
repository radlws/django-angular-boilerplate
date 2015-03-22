(function () {
  'use strict';

    /* This syntax defines the module dj_angular_boilerplate.authentication with
     dj_angular_boilerplate.authentication.controllers and dj_angular_boilerplate.authentication.services
     as dependencies.
     */
    angular
        .module('dj_angular_boilerplate.authentication', [
      'dj_angular_boilerplate.authentication.controllers',
      'dj_angular_boilerplate.authentication.services'
    ]);

    angular
        .module('dj_angular_boilerplate.authentication.controllers', []);

    angular
        .module('dj_angular_boilerplate.authentication.services', ['ngCookies']);
})();