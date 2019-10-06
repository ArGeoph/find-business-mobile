/**
 * Imports
 */
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../theme/styles';

/**
 * Functional component
 * @param props
 * Description: returns the error message component with error message passed as a prop
 */
export const ErrorMessage = React.memo(function(props: any) {
  const { errorMessage } = props;

  if (errorMessage !== '') {
    console.log('ErrorMessage::Render');
    return (
      <View>
        {!!errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    );
  } else {
    return null;
  }
}); // End of functional component
// End of file
