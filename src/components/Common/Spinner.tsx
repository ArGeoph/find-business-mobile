import { ActivityIndicator } from 'react-native';
import { styles } from '../../theme/styles';
import React from 'react';

/**
 * Functional component
 * @param props
 * Description: renders spinner if passed props.loading is true
 */
export const Spinner = (props: any) => {
  return (
    <ActivityIndicator
      animating={props.isLoading}
      color='blue'
      size='large'
      style={styles.spinner}
    />
  );
}; // End of functional component
// End of file
