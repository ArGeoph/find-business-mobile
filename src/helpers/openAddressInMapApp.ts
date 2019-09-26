/**
 * Imports
 */
import { Linking, Platform } from "react-native";

// Open business's address in the external app
export const openAddressInMapApp = (address: string) => {
  let addressWithPrefix: string;

  // Prepare the address query based on the platform
  if (Platform.OS === "android") {
    addressWithPrefix = `geo:0,0?q=${address}`;
  } else {
    addressWithPrefix = `maps:0,0?q=${address}`;
  }

  // Open address in the external app
  Linking.canOpenURL(addressWithPrefix)
    .then(isSupported => {
      if (isSupported) {
        Linking.openURL(addressWithPrefix);
      } else {
        console.log("Call to maps application are not supported");
      }
    })
    .catch(error => {
      console.log(error);
    });
};
