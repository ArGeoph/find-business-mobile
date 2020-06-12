import { Dimensions } from "react-native";

// Sizes of different objects used across the application
export const Sizes = {
  iconSize: 14,
  buttonFontSize: 13,
  errorMessageFontSize: 24,
  businessContentButtonFontSize: 13,
  businessHeaderFontSize: 26,
  businessContentFontSize: 16,
};

// Color's codes used all across the application
export const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  pink: '#f779fe',
  light_blue: '#009dff',
  orange: '#ffa100',
  red: '#fc0000',
};

// Get the device screen's width and height
export const { height, width } = Dimensions.get('screen');
// End of file
