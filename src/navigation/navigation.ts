/**
 * Imports
 */
import HomeScreen from '../screens/HomeScreen';
import BusinessWebView from '../screens/BusinessWebView';
import FavoriteBusinesses from '../screens/FavoriteBusinesses';
import Settings from '../screens/Settings';
import PageNotFound from '../screens/PageNotFound';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Step 1. Create React Native routes
const RootStack = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    BusinessWebsiteScreen: {
        screen: BusinessWebView,
    },
    ErrorScreen: {
        screen: PageNotFound,
    },
    SettingsScreen: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
        }
    },
    FavoriteBusinessesScreen: {
      screen: FavoriteBusinesses,
      navigationOptions: {
          title: 'Favorites',
      }
    },
  },
  {
    initialRouteName: 'Home'
  }
); // End of createStackNavigator

// Step 2. Create and export app container
export const AppContainer = createAppContainer(RootStack);
// End of file
