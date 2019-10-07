// Import
import {
  SEARCH_BUTTON_CLICKED,
  SET_APP_LOCALE,
  SORT_BY_CLICKED,
  FETCH_BUSINESSES_BEGIN,
  FETCH_BUSINESSES_SUCCESS,
  FETCH_BUSINESSES_FAILURE
} from '../actions/actionTypes';

// Root Reducer
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case SEARCH_BUTTON_CLICKED:
      console.log(action);
      return {
        ...state,
        isSearchButtonClicked: action.isSearchButtonClicked
      };

    case SET_APP_LOCALE:
      console.log(action);
      return {
        ...state,
        locale: action.locale
      };

    case FETCH_BUSINESSES_BEGIN:
      console.log(action);
      return {
        ...state,
        term: action.term,
        location: action.location,
        sortBy: action.sortBy,
        errorMessage: '',
        isLoading: true
      };

    case FETCH_BUSINESSES_SUCCESS:
      console.log(action);
      return {
        ...state,
        errorMessage: '',
        businesses: action.businesses,
        isLoading: false,
        isSearchButtonClicked: false
      };

    case FETCH_BUSINESSES_FAILURE:
      console.log(action);

      return {
        ...state,
        errorMessage: action.errorMessage,
        businesses: [],
        isLoading: false,
        isSearchButtonClicked: false
      };

    case SORT_BY_CLICKED:
      console.log(action);

      return {
        ...state,
        sortBy: action.sortBy
      };

      // Return the state if the action isn't correct
    default:
      return state;
  }
}; // End of the root reducer

export default rootReducer;
// End of file
