/**
 * Imports
 */
// React imports
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "../../resources/styles/styles";
import { Button, Rating } from "react-native-elements";
// Import helpers
import { strings } from "../../helpers/localization";
import { openAddressInMapApp } from "../../helpers/openAddressInMapApp";
import { makePhoneCall } from "../../helpers/makePhoneCall";

/**
 * Functional component: Search Results
 * Description: renders a list of businesses passed as an array in props.businesses
 * @params props
 */
const SearchResults = (props: any) => {
  const {
    term,
    location,
    sortBy,
    businesses,
    isLoading,
    onResultsRefresh,
    navigation
  } = props;

  if (businesses.length !== 0) {
    console.log("SearchResults::Render");
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              onResultsRefresh(term, location, sortBy);
            }}
            refreshing={isLoading}
          />
        }
        data={businesses.map((business: any) => {
          return {
            id: business.id,
            title: business.name,
            address: business.address,
            phone: business.phone,
            city: business.city,
            rating: business.rating,
            priceRange: business.priceRange,
            url: business.url,
            reviewCount: business.reviewCount,
            image: business.imageSrc,
            latitude: business.latitude,
            longitude: business.longitude
          };
        })}
        renderItem={({ item }: any) => {
          return (
            <TouchableOpacity
              style={styles.businessesList}
              onPress={() => {
                item.url
                  ? navigation.navigate("BusinessWebsiteScreen", {
                      uri: item.url
                    })
                  : navigation.navigate("ErrorScreen");
              }}
            >
              <View>
                <Text style={styles.businessHeader}>{item.title}</Text>
              </View>
              <View style={styles.businessButtonContainer}>
                <Button
                  titleStyle={styles.businessButtonText}
                  buttonStyle={styles.businessButton}
                  title={strings("open")}
                  icon={<Icon name="map-marked-alt" size={17} color="white" />}
                  onPress={() =>
                    openAddressInMapApp(`${item.address} ${item.city}`)
                  }
                  iconRight
                />
                <Text style={styles.businessContent}>
                  {item.address} {item.city}
                </Text>
              </View>
              <View style={styles.businessButtonContainer}>
                <Button
                  titleStyle={styles.businessButtonText}
                  buttonStyle={styles.businessButton}
                  title={strings("call")}
                  icon={<Icon name="phone" size={17} color="white" />}
                  onPress={() => makePhoneCall(item.phone)}
                  iconRight
                />
                <Text style={styles.businessContent}>{item.phone}</Text>
              </View>
              <View style={styles.businessButtonContainer}>
                <Button
                  titleStyle={styles.businessButtonText}
                  buttonStyle={styles.businessButton}
                  title={strings("rating")}
                  icon={<Icon name="smile" size={17} color="white" />}
                  iconRight
                />
                <View style={styles.ratingContainer}>
                  <Rating
                    showRating={false}
                    imageSize={15}
                    startingValue={item.rating}
                    fractions={1}
                  />
                </View>
              </View>
              <View style={styles.businessButtonContainer}>
                <Button
                  titleStyle={styles.businessButtonText}
                  buttonStyle={styles.businessButton}
                  title={strings("reviews")}
                  icon={<Icon name="sort-numeric-up" size={17} color="white" />}
                  iconRight
                />
                <Text style={styles.businessContent}>{item.reviewCount}</Text>
              </View>
              <View style={styles.businessButtonContainer}>
                <Button
                  titleStyle={styles.businessButtonText}
                  buttonStyle={styles.businessButton}
                  title={strings("price")}
                  icon={<Icon name="dollar-sign" size={17} color="white" />}
                  iconRight
                />
                <Text style={styles.businessContent}>{item.priceRange}</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.businessImage}
                  source={{ uri: item.image }}
                />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item: any) => item.id}
      />
    );
  } else {
    return null;
  }
}; // End of functional component

export default SearchResults;
// End of file
