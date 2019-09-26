/**
 * Imports
 */
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

/**
 * Functional component CustomButton
 * @param props
 * Description: returns a custom button
 */
export const CustomButton = (props: any) => {
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
}; // End of functional component
// End of file
