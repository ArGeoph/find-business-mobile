/**
 * Imports
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Sizes } from '../theme/GlobalStyles';

/**
 * Functional Component: FavoriteBusinesses
 * Description: contains the list of businesses saved by the user
 */
const FavoriteBusinesses = (props: any) => {
  console.log('FavouritesScreen::Render');

  return (
    <View>
       <Text style={styles.listEmptyMessage}>You haven't added anything to your favorites yet!</Text>
    </View>
  );
};// End of Functional Component

// Styles
const styles = StyleSheet.create({
    listEmptyMessage: {
       textAlign: 'center',
        fontSize: Sizes.errorMessageFontSize
    },
});// End of styles object

export default FavoriteBusinesses;
// End of file
