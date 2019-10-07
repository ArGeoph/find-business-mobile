/**
 * Imports
 */
import React from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, Rating } from 'react-native-elements';

// Import styles
import { styles } from '../../theme/styles';
import { Sizes } from '../../theme/GlobalStyles';

// Import helpers
import { strings } from '../../helpers/localization';
import { openAddressInMapApp } from '../../helpers/openAddressInMapApp';
import { makePhoneCall } from '../../helpers/makePhoneCall';
import { Business } from "../../api/model/Business";

/**
 * Functional component: Search Results
 * Description: renders a list of businesses passed as an array in props.businesses
 * @params props
 */
const SearchResults = React.memo(function(props: any) {
  const {
    term,
    location,
    sortBy,
    businesses,
    isLoading,
    onResultsRefresh,
    navigation
  } = props;

  // Check if there's anything to render
  if (businesses.length !== 0) {
    console.log('SearchResults::Render');

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
        data={businesses.map((business: Business) => {
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
                  ? navigation.navigate('BusinessWebsiteScreen', {
                      uri: item.url
                    })
                  : navigation.navigate('ErrorScreen');
              }}
            >
              <View>
                <Text style={styles.businessHeader}>{item.title}</Text>
              </View>
              <View style={styles.businessButtonContainer}>
                <Button
                  titleStyle={styles.businessButtonText}
                  buttonStyle={styles.businessButton}
                  title={strings('open')}
                  icon={
                    <Icon
                      name='map-marked-alt'
                      size={Sizes.iconSize}
                      color='white'
                    />
                  }
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
                  title={strings('call')}
                  icon={
                    <Icon name='phone' size={Sizes.iconSize} color='white' />
                  }
                  onPress={() => makePhoneCall(item.phone)}
                  iconRight
                />
                <Text style={styles.businessContent}>{item.phone}</Text>
              </View>
              <View style={styles.businessButtonContainer}>
                <Button
                  titleStyle={styles.businessButtonText}
                  buttonStyle={styles.businessButton}
                  title={strings('rating')}
                  icon={
                    <Icon name='smile' size={Sizes.iconSize} color='white' />
                  }
                  iconRight
                />
                <View style={styles.ratingContainer}>
                  <Rating
                    showRating={false}
                    imageSize={Sizes.iconSize}
                    startingValue={item.rating}
                    fractions={1}
                  />
                </View>
              </View>
              <View style={styles.businessButtonContainer}>
                <Button
                  titleStyle={styles.businessButtonText}
                  buttonStyle={styles.businessButton}
                  title={strings('reviews')}
                  icon={
                    <Icon
                      name='sort-numeric-up'
                      size={Sizes.iconSize}
                      color='white'
                    />
                  }
                  iconRight
                />
                <Text style={styles.businessContent}>{item.reviewCount}</Text>
              </View>
              <View style={styles.businessButtonContainer}>
                <Button
                  titleStyle={styles.businessButtonText}
                  buttonStyle={styles.businessButton}
                  title={strings('price')}
                  icon={
                    <Icon
                      name='dollar-sign'
                      size={Sizes.iconSize}
                      color='white'
                    />
                  }
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
}); // End of functional component

export default SearchResults;
// End of file
