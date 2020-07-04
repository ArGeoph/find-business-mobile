import fetchBusinesses from '../../api/fetchBusinesses';
import {
  fetchBegin,
  successfulResponse,
  unsuccessfulResponse,
} from './actions';

/**
 * Description: fetches data from Yelp api and dispatches corresponding Redux actions
 * @param {string} term
 * @param {string} location
 * @param {string} sortBy
 * @return on success: dispatches the corresponding Redux action by calling successfulResponse
 *          on failure: dispatches the corresponding Redux action by calling unsuccessfulResponse
 */
export const searchBusinesses = (
  term: string,
  location: string,
  sortBy: string
) => {
  return (dispatch: any) => {
    dispatch(fetchBegin(term, location, sortBy));

    return fetchBusinesses(term, location, sortBy)
      .then(businesses => {
        if (businesses && businesses.length > 0) {
          dispatch(successfulResponse(businesses));
        } // If ends
      })
      .catch(error => {
        // Catch error if any and set state errorMessage to the error message
        console.log('searchBusinesses::searchYelp [catch block]');
        dispatch(unsuccessfulResponse(error.message));
      });
  };
}; // End of fetchBusinesses function

export default searchBusinesses;
// End of file
