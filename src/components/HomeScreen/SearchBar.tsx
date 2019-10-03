/**
 * Imports
 */
import React, { useState } from "react";
import { ImageBackground, TextInput, View, Picker, SafeAreaView } from "react-native";
import { CustomButton } from "../Common/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";

// Import styles
import { styles } from "../../theme/styles";
import { Colors, Sizes } from "../../theme/GlobalStyles";

// Import helpers
import { getCoordinatesFromDeviceGPS } from "../../helpers/getCoordinatesFromDeviceGPS";
import { strings } from "../../helpers/localization";

/**
 * Functional component
 * @param props
 * Description: returns the Search Bar component
 */
const SearchBar = React.memo(function SearchBar (props: any) {
  console.log("SearchBar::Render");

  const {
    onLocaleChange,
    onResultsRefresh,
    onSearchButtonClicked,
    onSortByChange,
    sortBy,
    isLoading,
    isSearchButtonClicked,
    locale
  } = props;

  // React Hooks
  const [localTerm, setTerm] = useState("");
  const [localLocation, setLocation] = useState("");

  /** Returns button with the label passed in as a parameter
   * 
   * @param buttonName 
   */
  const renderButton = (buttonLabel: string) => {
    return (
      <CustomButton
          onPress={() => {
            if (sortBy !== buttonLabel) {
              onSortByChange(buttonLabel);

              if (localTerm !== "" && localLocation !== "") {
                onResultsRefresh(localTerm, localLocation, buttonLabel);
              }
            }
          }}
          isLoading={false}
          title={strings(buttonLabel)}
          buttonTextStyle={styles.sortButtonTextStyle}
          style={
            sortBy === buttonLabel
              ? styles.activeSortButton
              : styles.sortButton
          }
        />
    );
  }; // End of method returning button

  // Return corresponding JSX
  return (
    <ImageBackground
      source={require("../../resources/images/background_search_mobile.jpg")}
      style={styles.searchBar}
    >
      <SafeAreaView></SafeAreaView>
      <View
        style={styles.topHeaderContainer}
      >
        <Button
          buttonStyle={styles.topHeaderMenuButton}
          icon={<Icon name="tools" size={Sizes.iconSize} color="white" />}
          iconRight
        />

        {/* Language dropdown list */}
        <View>
          <Picker
            mode="dropdown"
            itemStyle={styles.pickerItem}
            selectedValue={locale}
            style={styles.picker}
            onValueChange={itemValue => onLocaleChange(itemValue)}
          >
            <Picker.Item label="EN" value="en" />
            <Picker.Item label="FR" value="fr" />
            <Picker.Item label="ES" value="es" />
            <Picker.Item label="DE" value="de" />
            <Picker.Item label="RU" value="ru" />
            <Picker.Item label="HI" value="hi" />
          </Picker>
        </View>
      </View>

      {/* Input fields */}
      <View style={styles.inputFieldsContainer}>
        <TextInput
          style={styles.inputField}
          placeholder={strings("search_request")}
          onChangeText={event => setTerm(event)}
          value={localTerm}
        />

        <View style={styles.addressInputFieldContainer}>
          <TextInput
            style={styles.addressInputField}
            placeholder={strings("address")}
            onChangeText={event => setLocation(event)}
            value={localLocation}
          />
          <Button
            buttonStyle={styles.geolocationButton}
            icon={<Icon name="location-arrow" size={Sizes.iconSize} color="black" />}
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
          title={strings("search")}
          style={styles.searchButton}
          buttonTextStyle={styles.searchButtonTextStyle}
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
