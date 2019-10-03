/**
 * Imports
 */
import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

/**
 * Functional component CustomButton
 * @param props
 * Description: returns a custom button
 */
export const CustomButton = React.memo(function CustomButton (props: any) {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      {props.isLoading ? (
        <ActivityIndicator
          animating={props.isLoading}
          color="blue"
          size="small"
          style={{ paddingTop: 8, paddingBottom: 8 }}
        />
      ) : (
        <Text style={props.buttonTextStyle}>{props.title} </Text>
      )}
    </TouchableOpacity>
  );
}); // End of functional component
// End of file
