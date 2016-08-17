/// <reference path="../../../typings/index.d.ts" />

angular
  .module('app')
  .component('offerActionHeader', {
    templateUrl: 'app/actions/offer-action-header.html',
    bindings: {
      action: '<'
    }
  });
