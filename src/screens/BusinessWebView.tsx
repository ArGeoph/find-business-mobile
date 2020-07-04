/**
 * Imports
 */
import React from 'react';
import { WebView } from 'react-native-webview';

/**
 * Class: BusinessWebView
 */
class BusinessWebView extends React.Component {
  /**
   * Primary render function
   */
  render() {
    // Step 1. Get navigation and url from props
    const { navigation }: any = this.props;
    const uri: string = navigation.getParam('uri');

    // Step 2. Render url in web view component
    return <WebView source={{ uri }} startInLoadingState={true} />;
  }
} // End of class

export default BusinessWebView;
// End of file
