/**
 * Imports
 */
import React from "react";
import { View, Text } from "react-native";
import { styles } from "../resources/styles/styles";

/**
 * Functional Component: PageNotFound
 * Description: renders a warning when a business doesn't have a url
 */
export const PageNotFound = () => {
  console.log("PageNotFound::Render");
  return (
    <View>
      <Text style={styles.errorMessage}>
        This business doesn't have a website! Please try another one.
      </Text>
    </View>
  );
}; // End of Functional Component
// End of file
