/// <reference path="../../../typings/index.d.ts" />

angular
  .module('app')
  .component('fountainTech', {
    templateUrl: 'app/techs/tech.html',
    bindings: {
      tech: '<'
    }
  });
