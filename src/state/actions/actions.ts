/**
 * Imports
 */
import { setLocale } from "../../helpers/localization";
import {
  SEARCH_BUTTON_CLICKED,
  SORT_BY_CLICKED,
  FETCH_BUSINESSES_BEGIN,
  FETCH_BUSINESSES_SUCCESS,
  FETCH_BUSINESSES_FAILURE,
  SET_APP_LOCALE
} from "./actionTypes";

// Action Creators
export const searchButtonClicked = () => {
  return {
    type: SEARCH_BUTTON_CLICKED,
    isSearchButtonClicked: true
  };
};

export const setAppLocale = (locale: string) => {
  // Set the locale
  setLocale(locale);
  return {
    type: SET_APP_LOCALE,
    locale
  };
};

export const changeSortingParameter = (sortBy: string) => {
  return {
    type: SORT_BY_CLICKED,
    sortBy
  };
};

export const fetchBegin = (term: string, location: string, sortBy: string) => {
  return {
    type: FETCH_BUSINESSES_BEGIN,
    term,
    location,
    sortBy
  };
};

export const successfulResponse = (businesses: []) => {
  return {
    type: FETCH_BUSINESSES_SUCCESS,
    businesses
  };
};

export const unsuccessfulResponse = (errorMessage: string) => {
  return {
    type: FETCH_BUSINESSES_FAILURE,
    errorMessage
  };
};
// End of action creators
// End of file
