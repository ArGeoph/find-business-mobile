/**
 * Imports
 */
import {
  Alert,
  PermissionsAndroid,
  PermissionStatus,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

// Get coordinates from the device GPS
export const getCoordinatesFromDeviceGPS = async (setLocation: any) => {
  console.log('SearchBar::getCoordinatesFromGPS');

  let isPermissionGranted: PermissionStatus = 'granted';

  // Request the permission to use the external map app is granted if it is Android
  if (Platform.OS === 'android') {
    isPermissionGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
  }

  // Get coordinates
  if (isPermissionGranted === 'granted') {
    await Geolocation.getCurrentPosition(
      position => {
        const coordinates = `${position.coords.latitude} ${position.coords.longitude}`;
        setLocation(coordinates);
      },
      error => {
        // See error code charts below.
        Alert.alert(error.message);
      },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
};
