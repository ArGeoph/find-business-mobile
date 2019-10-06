/**
 * Imports
 */
import { Linking, Platform } from 'react-native';

// Method making phone calls
export const makePhoneCall = (phoneNumber: string) => {
  let phoneNumberWithPrefix: string;

  // Prepare phone number based on the platform
  if (Platform.OS === 'android') {
    phoneNumberWithPrefix = `tel:${phoneNumber}`;
  } else {
    phoneNumberWithPrefix = `telprompt:${phoneNumber}`;
  }

  // Make phone call
  Linking.canOpenURL(phoneNumberWithPrefix)
    .then(isSupported => {
      if (isSupported) {
        Linking.openURL(phoneNumberWithPrefix);
      } else {
        console.log('Phone calls are not supported');
      }
    })
    .catch(error => {
      console.log(error);
    });
};
