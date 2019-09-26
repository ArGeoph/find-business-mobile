/**
 * Imports
 */
import React from "react";
import { View } from "react-native";
import SearchResults from "../components/HomeScreen/SearchResults";
import { ErrorMessage } from "../components/HomeScreen/ErrorMessage";
import { Spinner } from "../components/Common/Spinner";
import SearchBar from "../components/HomeScreen/SearchBar";
import { connect } from "react-redux";
import {
  searchButtonClicked,
  setAppLocale,
  changeSortingParameter
} from "../state/actions/actions";
import searchBusinesses from "../state/actions/searchBusinesses";
/**
 * Interfaces
 */
interface Props {
  navigation: any;
  isRefreshing: boolean;
  isLoading: boolean;
  businesses: [];
}

interface State {}

/**
 * Description: renders search bar with two input field and businesses search results if any
 * Class: HomeScreen
 *
 */
class HomeScreen extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    console.log("HomeScreen::Constructor");
    console.log(`HomeScreen::Initial Props[${props}]`);
  }

  /**
   * Primary render function
   */
  render() {
    console.log("HomeScreen::Render");
    const { isLoading } = this.props;

    return (
      <View>
        <SearchBar {...this.props} />
        <ErrorMessage {...this.props} />
        <SearchResults {...this.props} />
        <Spinner isLoading={isLoading} />
      </View>
    );
  }
} // End of class

// Redux related code
const mapStateToProps = (state: any) => {
  return {
    term: state.term,
    location: state.location,
    businesses: state.businesses,
    errorMessage: state.errorMessage,
    sortBy: state.sortBy,
    isLoading: state.isLoading,
    isSearchButtonClicked: state.isSearchButtonClicked,
    locale: state.locale
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onLocaleChange: (locale: string) => dispatch(setAppLocale(locale)),
  onSearchButtonClicked: (term: string, location: string, sortBy: string) => {
    dispatch(searchButtonClicked());
    dispatch(searchBusinesses(term, location, sortBy));
  },
  onSortByChange: (sortBy: string) => dispatch(changeSortingParameter(sortBy)),
  onResultsRefresh: (term: string, location: string, sortBy: string) =>
    dispatch(searchBusinesses(term, location, sortBy))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen); // End of file
