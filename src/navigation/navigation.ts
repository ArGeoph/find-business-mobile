/**
 * Imports
 */
import HomeScreen from "../screens/HomeScreen";
import { BusinessWebView } from "../screens/BusinessWebView";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { PageNotFound } from "../screens/PageNotFound";

// Step 1. Create React Native routes
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    BusinessWebsiteScreen: {
      screen: BusinessWebView
    },
    ErrorScreen: {
      screen: PageNotFound
    },
  },
  {
    initialRouteName: "Home"
  }
);

// Step 2. Create and export app container
export const AppContainer = createAppContainer(RootStack);
// End of file
