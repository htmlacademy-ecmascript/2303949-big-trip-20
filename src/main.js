
import TripEventsPresenter from './presenter/events-presenter';


const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.trip-events');
const boardPresenter = new TripEventsPresenter({container: tripEventsElement});


boardPresenter.init();
