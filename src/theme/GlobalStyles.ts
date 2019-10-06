import { Dimensions } from "react-native";

// Sizes of different objects used across the application
export const Sizes = {
  iconSize: 17,
  buttonFontSize: 14,
  errorMessageFontSize: 20,
  businessContentButtonFontSize: 13,
  businessHeaderFontSize: 26,
  businessContentFontSize: 16
};

// Color's codes used all across the application
export const Colors = {
  black: '#000000',
  pink: '#f779ee',
  light_blue: '#009dff'
};

// Get the device screen's width and height
export const { height, width } = Dimensions.get('screen');
