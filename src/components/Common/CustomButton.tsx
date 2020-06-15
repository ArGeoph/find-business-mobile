/**
 * Imports
 */
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

/**
 * Functional component CustomButton
 * @param props
 * Description: returns a custom button
 */
export const CustomButton = React.memo(function CustomButton(props: any) {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      {props.isLoading ? (
        <ActivityIndicator
          animating={props.isLoading}
          color='blue'
          size='small'
          style={styles.activityIndicator}
        />
      ) : (
        <Text style={props.buttonTextStyle}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
}); // End of functional component

const styles = StyleSheet.create({
  activityIndicator: {
    paddingTop: 8,
    paddingBottom: 8
  }
});
// End of file
