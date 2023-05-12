import TripSortView from '../view/sort-view';
import {render} from '../render';
import TripEventsListView from '../view/events-list-view';
import TripEventEditView from '../view/event-edit-view';
import TripEventView from '../view/event-view';
import TripFiltersView from './view/filters-view.js';

const pageHeader = document.querySelector('.page-header');
const tripControlsFiltersElement = pageHeader.querySelector('.trip-controls__filters');

export default class TripEventsPresenter {
  tripSortComponent = new TripSortView();
  tripEventsComponent = new TripEventsListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.tripSortComponent, this.container);
    render(this.tripEventsComponent, this.container);

    render(new TripEventEditView(), this.tripEventsComponent.getElement());
    render(new TripFiltersView(), tripControlsFiltersElement);
    const tempTripEventsStubsCount = 3;

    for (let i = 0; i < tempTripEventsStubsCount; i++) {
      render(new TripEventView(), this.tripEventsComponent.getElement());
    }
  }
}
