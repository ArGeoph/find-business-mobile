/**
 * Imports
 */
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Picker } from '@react-native-community/picker';

import { styles } from '../theme/styles';
import { setAppLocale } from '../state/actions/actions';
import { getListOfAvailableLocales } from '../helpers/localization';
import { getLocalizedStringFor } from '../helpers/localization';

/**
 * Settings screen
 * Description: renders the Settings screen
 */
const Settings = () => {
  console.log('SettingsScreen::Render');

  const { locale } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const onLanguageChange = (selectedLocale: string) => dispatch(setAppLocale(selectedLocale));

  const listOfAvailableLocales = getListOfAvailableLocales();
  const listOfCuisines = ['none', 'sushi', 'chinese', 'sushi', 'bbq', 'italian'];

  return (
    <View>
        <View style={styles.settingRow}>
            <Text style={styles.settingRowText}>{getLocalizedStringFor('select_ui_language')}</Text>
            <Picker
                mode='dropdown'
                selectedValue={locale}
                onValueChange={onLanguageChange}
                style={styles.picker}
            >
                {listOfAvailableLocales.map((locale: string) => <Picker.Item label={locale.toUpperCase()} value={locale} />)}
            </Picker>
        </View>

        <View style={styles.settingRow}>
            <Text style={styles.settingRowText}>{getLocalizedStringFor('select_favorite_cuisine')}</Text>
            <Picker
                mode='dropdown'
                selectedValue={listOfCuisines[0]}
                style={styles.picker}
            >
                {listOfCuisines.map(cuisine => <Picker.Item label={cuisine.toLocaleUpperCase()} value={cuisine} />)}
            </Picker>
        </View>
    </View>
  );
};// End of Functional Component

export default Settings;
// End of file
