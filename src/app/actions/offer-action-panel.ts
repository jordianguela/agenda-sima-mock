/// <reference path="../../../typings/index.d.ts" />

angular
  .module('app')
  .component('offerActionPanel', {
    templateUrl: 'app/actions/offer-action-panel.html',
    bindings: {
      action: '<'
    }
  });
