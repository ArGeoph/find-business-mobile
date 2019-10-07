/**
 * Imports
 */
import React from 'react';
import { View, Text, Picker } from 'react-native';
import { styles } from '../theme/styles';

/**
 * Functional Component: PageNotFound
 * Description: renders a warning when a business doesn't have a url
 */
export const Settings = (props: any) => {
  console.log('SettingsScreen::Render');

  // Get all required variables from props
  const onLocaleChange = props.navigation.getParam('onLocaleChange');
  const { locale }  = props;
  console.log('Locale', locale);

  return (
    <View>
        <Picker
            mode='dropdown'
            selectedValue={locale}
            style={styles.picker}
            onValueChange={selectedLocale => onLocaleChange(selectedLocale)}
        >
            <Picker.Item label='EN' value='en' />
            <Picker.Item label='FR' value='fr' />
            <Picker.Item label='ES' value='es' />
            <Picker.Item label='DE' value='de' />
            <Picker.Item label='RU' value='ru' />
            <Picker.Item label='HI' value='hi' />
            <Picker.Item label='JA' value='ja' />
            <Picker.Item label='ZH' value='zh' />
        </Picker>
    </View>
  );
};// End of Functional Component
// End of file
