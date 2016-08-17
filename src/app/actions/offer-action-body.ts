/// <reference path="../../../typings/index.d.ts" />

angular
  .module('app')
  .component('offerActionBody', {
    templateUrl: 'app/actions/offer-action-body.html',
    bindings: {
      action: '<'
    }
  });
