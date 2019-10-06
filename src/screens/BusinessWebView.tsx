/**
 * Imports
 */
import React from 'react';
import { WebView } from 'react-native-webview';

/**
 * Class: BusinessWebView
 */
export class BusinessWebView extends React.Component {
  /**
   * Primary render function
   */
  render() {
    // Step 1. Get navigation and url from props
    const { navigation }: any = this.props;
    const url: string = navigation.getParam('uri');
    console.log(`BusinessWebView::Render -> [url ${url}]`);

    // Step 2. Render url in web view component
    return <WebView source={{ uri: url }} startInLoadingState={true} />;
  }
} // End of class
// End of file
