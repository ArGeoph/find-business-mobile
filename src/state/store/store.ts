import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';

const initialState = {
  term: '',
  location: '',
  businesses: [],
  errorMessage: '',
  sortBy: 'best_match',
  isLoading: false,
  isSearchButtonClicked: false,
  locale: 'en'
};

// Create the store and export it
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
// End of file
