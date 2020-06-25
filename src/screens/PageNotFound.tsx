/**
 * Imports
 */
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/styles';

/**
 * Functional Component: PageNotFound
 * Description: renders a warning when a business doesn't have a url
 */
const PageNotFound = () => {
  console.log('PageNotFound::Render');
  return (
    <View>
      <Text style={styles.errorMessage}>
        This business doesn't have a website! Please try another one.
      </Text>
    </View>
  );
}; // End of Functional Component

export default PageNotFound;
// End of file
