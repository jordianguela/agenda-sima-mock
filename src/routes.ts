/// <reference path="../typings/index.d.ts" />

angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<app></app>'
    })
    .state('offer-actions', {
      url: '/offer/12345/actions/987',
      template: '<offer-actions></offer-actions>'
    });
}
