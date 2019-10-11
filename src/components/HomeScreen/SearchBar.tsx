/**
 * Imports
 */
import React, { useState } from 'react';
import {
  ImageBackground,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';
import { CustomButton } from '../Common/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';

// Import styles
import { styles } from '../../theme/styles';
import { Colors, Sizes } from '../../theme/GlobalStyles';

// Import helpers
import { getCoordinatesFromDeviceGPS } from '../../helpers/getCoordinatesFromDeviceGPS';
import { getLocalizedStringFor } from '../../helpers/localization';

/**
 * Functional component
 * Description: returns the Search Bar component
 * @param props
 */
const SearchBar = React.memo(function SearchBar(props: any) {
  console.log('SearchBar::Render');

  const {
    locale,
    onLocaleChange,
    onResultsRefresh,
    onSearchButtonClicked,
    onSortByChange,
    sortBy,
    isLoading,
    isSearchButtonClicked,
    navigation
  } = props;

  // React Hooks
  const [localTerm, setTerm] = useState('');
  const [localLocation, setLocation] = useState('');

  /** Returns button with the label passed in as a parameter
   * @param {string} buttonLabel
   */
  const renderButton = (buttonLabel: string) => {
    return (
      <CustomButton
        onPress={() => {
          if (sortBy !== buttonLabel) {
            onSortByChange(buttonLabel);

            if (localTerm !== '' && localLocation !== '') {
              onResultsRefresh(localTerm, localLocation, buttonLabel);
            }
          }
        }}
        isLoading={false}
        title={getLocalizedStringFor(buttonLabel)}
        buttonTextStyle={styles.searchBarButtonTextStyle}
        style={
          sortBy === buttonLabel ? styles.activeSortButton : styles.sortButton
        }
      />
    );
  }; // End of method returning button

  // Return corresponding JSX
  return (
    <ImageBackground
      source={require('../../resources/images/background_search_mobile.jpg')}
      style={styles.searchBar}
    >
      <SafeAreaView />
      <View style={styles.topHeaderContainer}>
        <View>
          {/*Settings screen button*/}
          <Button
            buttonStyle={styles.topHeaderMenuButton}
            icon={<Icon name='tools' size={Sizes.iconSize} color={Colors.white} />}
            onPress={() => navigation.navigate('SettingsScreen', {'onLocaleChange': onLocaleChange, 'locale': locale})}
            iconRight
          />
          {/*Favourite screen button*/}
          <Button
            buttonStyle={styles.topHeaderMenuButton}
            icon={<Icon name='star' size={Sizes.iconSize} color={Colors.white} />}
            onPress={() => navigation.navigate('FavoriteBusinessesScreen')}
            iconRight
          />
        </View>
      </View>

      {/* Input fields */}
      <View style={styles.inputFieldsContainer}>
        {/*Search request field*/}
        <TextInput
          style={styles.inputField}
          placeholder={getLocalizedStringFor('search_request')}
          onChangeText={setTerm}
          value={localTerm}
        />

        {/*Address field*/}
        <View style={styles.addressInputFieldContainer}>
          <TextInput
            style={styles.addressInputField}
            placeholder={getLocalizedStringFor('address')}
            onChangeText={setLocation}
            value={localLocation}
          />
          <Button
            buttonStyle={styles.geolocationButton}
            icon={<Icon name='location-arrow' size={Sizes.iconSize} />}
            onPress={() => getCoordinatesFromDeviceGPS(setLocation)}
            iconRight
          />
        </View>

        {/* Search button */}
        <CustomButton
          onPress={() => {
            onSearchButtonClicked(localTerm, localLocation, sortBy);
          }}
          isLoading={isLoading && isSearchButtonClicked}
          title={getLocalizedStringFor('search')}
          style={styles.searchButton}
          buttonTextStyle={styles.searchBarButtonTextStyle}
        />
      </View>

      {/* Filter by buttons */}
      <View style={styles.sortButtonsContainer}>
        {renderButton('best_match')}
        {renderButton('rating')}
        {renderButton('review_count')}
        {renderButton('distance')}
      </View>
    </ImageBackground>
  );
}); // End of functional component

export default SearchBar;
// End of file
