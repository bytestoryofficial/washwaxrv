import { createReduxApi } from '../../../api/api.js';

const REDUX_HOME = 'home';

const REDUX_MAP_COORD = 'home/mapCoord';
const API_MAP_COORD = '/landing/contact/info';

const REDUX_CONTACT = 'home/contact';
const API_CONTACT = '/landing/contact-us/create';

const REDUX_SERVICES = 'home/services';
const API_SERVICES = '/landing/services';

const REDUX_GALLERY = 'home/gallery';
const API_GALLERY = '/landing/gallery';

const REDUX_REVIEW_INFO = 'home/reviewInfo';
const API_REVIEW_INFO = '/landing/review/info';

const REDUX_REVIEW_CREATE = 'home/reviewCreate';
const API_REVIEW_CREATE = '/landing/review/create';

export const getMapCoordsAction = createReduxApi({
  prefix: REDUX_MAP_COORD,
  method: 'GET',
  endpoint: API_MAP_COORD,
  parameters: {},
});

export const contactUsAction = createReduxApi({
  prefix: REDUX_CONTACT,
  method: 'POST',
  endpoint: API_CONTACT,
  parameters: {},
});

export const getServicesAction = createReduxApi({
  prefix: REDUX_SERVICES,
  method: 'GET',
  endpoint: API_SERVICES,
  parameters: {},
});

export const getGalleryAction = createReduxApi({
  prefix: REDUX_GALLERY,
  method: 'GET',
  endpoint: API_GALLERY,
  parameters: {},
});

export const getReviewsAction = createReduxApi({
  prefix: REDUX_REVIEW_INFO,
  method: 'GET',
  endpoint: API_REVIEW_INFO,
  parameters: {},
});

export const createReviewAction = createReduxApi({
  prefix: REDUX_REVIEW_CREATE,
  method: 'POST',
  endpoint: API_REVIEW_CREATE,
  parameters: {},
});

export default REDUX_HOME;
