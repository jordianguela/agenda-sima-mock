/// <reference path="../../../typings/index.d.ts" />

class OfferAction {
  constructor(
    public panelHeadingDivId: string,
    public panelCollapseDivId: string,
    public offerActionEditable: boolean,
    public panelCollapseOpened: boolean,
    public actionDate: string,
    public actionTitle: string,
    public actionPerformedBy: string,
    public actionObservations: string,
    public actionFeedback: string
  ) {}
}

/** @ngInject */
class OfferActionsController {
  public actions: OfferAction[];

  constructor(private $http: angular.IHttpService) {
    $http
      .get('app/actions/offer-actions.json')
      .then(response => {
        this.actions = response.data as OfferAction[];
      });
  }
}

angular
  .module('app')
  .component('offerActions', {
    templateUrl: 'app/actions/offer-actions.html',
    controller: OfferActionsController
  });
