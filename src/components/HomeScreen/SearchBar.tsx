/**
 * Imports
 */
import { Platform, ImageBackground, TextInput, View } from "react-native";
import { styles } from "../../resources/styles/styles";
import React, { useState } from "react";
import { CustomButton } from "../Common/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";
import { strings } from "../../helpers/localization";
import { Picker } from "react-native";

// Import helpers
import { getCoordinatesFromDeviceGPS } from "../../helpers/getCoordinatesFromDeviceGPS";

/**
 * Functional component
 * @param props
 * Description: returns the Search Bar component
 */
const SearchBar = (props: any) => {
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

  // Get Platform
  const os: string = Platform.OS;

  // React Hooks
  const [localTerm, setTerm] = useState("");
  const [localLocation, setLocation] = useState("");

  // Return corresponding JSX
  return (
    <ImageBackground
      source={require("../../resources/images/background_search_mobile.jpg")}
      style={styles.searchBar}
    >
      <View
        style={
          os === "android"
            ? styles.topHeaderContainerAndroid
            : styles.topHeaderContainerIOS
        }
      >
        <Button
          buttonStyle={styles.topHeaderMenuButton}
          icon={<Icon name="bars" size={17} color="white" />}
          iconRight
        />
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
      <View style={styles.inputFieldsContainer}>
        <TextInput
          style={styles.inputField}
          placeholder={strings("search_request")}
          onChangeText={event => setTerm(event)}
          value={localTerm}
        />

        <View style={{ flex: 1, flexDirection: "row", height: 37 }}>
          <TextInput
            style={styles.addressInputField}
            placeholder={strings("address")}
            onChangeText={event => setLocation(event)}
            value={localLocation}
          />
          <Button
            buttonStyle={styles.geolocationButton}
            icon={<Icon name="location-arrow" size={15} color="black" />}
            onPress={() => getCoordinatesFromDeviceGPS(setLocation)}
            iconRight
          />
        </View>

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

      <View style={styles.sortButtonsContainer}>
        <CustomButton
          onPress={() => {
            if (sortBy !== "best_match") {
              onSortByChange("best_match");

              if (localTerm !== "" && localLocation !== "") {
                onResultsRefresh(localTerm, localLocation, "best_match");
              }
            }
          }}
          isLoading={false}
          title={strings("best_match")}
          buttonTextStyle={styles.sortButtonTextStyle}
          style={
            sortBy === "best_match"
              ? styles.activeSortButton
              : styles.sortButton
          }
        />
        <CustomButton
          onPress={() => {
            if (sortBy !== "rating") {
              onSortByChange("rating");

              if (localTerm !== "" && localLocation !== "") {
                onResultsRefresh(localTerm, localLocation, "rating");
              }
            }
          }}
          isLoading={false}
          title={strings("rating")}
          buttonTextStyle={styles.sortButtonTextStyle}
          style={
            sortBy === "rating" ? styles.activeSortButton : styles.sortButton
          }
        />
        <CustomButton
          onPress={() => {
            if (sortBy !== "review_count") {
              onSortByChange("review_count");

              if (localTerm !== "" && localLocation !== "") {
                onResultsRefresh(localTerm, localLocation, "review_count");
              }
            }
          }}
          isLoading={false}
          title={strings("most_reviewed")}
          buttonTextStyle={styles.sortButtonTextStyle}
          style={
            sortBy === "review_count"
              ? styles.activeSortButton
              : styles.sortButton
          }
        />
        <CustomButton
          onPress={() => {
            if (sortBy !== "distance") {
              onSortByChange("distance");

              if (localTerm !== "" && localLocation !== "") {
                onResultsRefresh(localTerm, localLocation, "distance");
              }
            }
          }}
          isLoading={false}
          title={strings("closest")}
          buttonTextStyle={styles.sortButtonTextStyle}
          style={
            sortBy === "distance" ? styles.activeSortButton : styles.sortButton
          }
        />
      </View>
    </ImageBackground>
  );
}; // End of functional component

export default SearchBar;
// End of file
