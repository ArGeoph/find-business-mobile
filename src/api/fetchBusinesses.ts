/**
 * Imports
 */

import { strings } from '../helpers/localization';
import { apiKey } from './apiKey';

const apiUrl = 'https://api.yelp.com/v3/businesses/search?term=';

/**
 * Description: fetches data from Yelp api
 * @param {string} term,
 * @param {string} location
 * @param {string} sortBy
 * @return on success: an array with restaurants information
 *          on failure: rejected promise with the description of the cause
 */
const fetchBusinesses = (term: string, location: string, sortBy: string) => {
  // Step 0. Check if user provided search term and location, if not throw an error with corresponding message
  if (!term) {
    if (!location) {
      // If both location and search term weren't provided, throw an error with corresponding message
      return Promise.reject(
        new Error(strings('no_search_request_and_location_message'))
      );
    }
    return Promise.reject(new Error(strings('no_search_request_message')));
  }
  if (!location) {
    // If location wasn't provided, throw an error with corresponding message
    return Promise.reject(new Error(strings('no_location_message')));
  }

  // Step 1. Fetch data from Yelp, if both search term and location were provided by user
  return fetch(`${apiUrl}${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  })
    .then(response => {
      // Step 2. If response is successful convert response to a json object
      console.log(`Yelp::Response: ${response}`);
      console.log(response);

      // Step 2.1. Check if object can be parsed as a Json object
      try {
        return response.json();
      } catch (error) {
        // Step 2.2. If it cannot be parsed, return a rejected promise with the reason
        return Promise.reject(new Error(strings('wrong_api_message')));
      }
    })
    .then(parsedResponse => {
      // Step 3.1 Iterate through returned object and include data that we need and return a new array
      console.log(parsedResponse);

      if (parsedResponse.businesses) {
        if (parsedResponse.businesses.length > 0) {
          return parsedResponse.businesses.map((business: any) => {
            return {
              key: business.id || 'N/A',
              id: business.id || 'N/A',
              imageSrc: business.image_url || 'N/A',
              name: business.name || 'N/A',
              address: business.location.address1 || 'N/A',
              city: business.location.city || 'N/A',
              rating: business.rating || 'N/A',
              reviewCount: business.review_count || 'N/A',
              url: business.url,
              phone: business.phone || 'N/A',
              priceRange: business.price || 'N/A',
              latitude: business.coordinates.latitude,
              longitude: business.coordinates.longitude
            };
          });
        }
        // Step 3.2 If Yelp returned an empty array throw an Error
        else {
          return Promise.reject(new Error(strings('search_returned_nothing')));
        }
      } else {
        /* Step 3.3 if fetch returned not an array, what can happen in case of wrong credentials,
            or network problems, throw corresponding error */
        return Promise.reject(
          new Error(
            `${strings('code')}: ${parsedResponse.error.code}. ${strings(
              'description'
            )}: ${parsedResponse.error.description}`
          )
        );
      }
    });
}; // End of search function

export default fetchBusinesses;
// End of file
