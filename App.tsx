/**
 * Imports
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/state/store/store';
import { AppContainer } from './src/navigation/navigation';

/**
 * Class: App
 */
export default class App extends Component {
  /**
   * Primary render function
   */
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
} // End of class
// End of file
