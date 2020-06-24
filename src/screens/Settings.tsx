/**
 * Imports
 */
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { Picker } from '@react-native-community/picker';
import { styles } from '../theme/styles';
import { setAppLocale } from "../state/actions/actions";

/**
 * Functional Component: PageNotFound
 * Description: renders a warning when a business doesn't have a url
 */
export const Settings = (props: any) => {
  console.log('SettingsScreen::Render');

  const { locale } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const onLanguageChange = (selectedLocale: any) => dispatch(setAppLocale(selectedLocale));

  return (
    <View>
        <View style={styles.settingRow}>
        <Text style={styles.settingRowText}>Select UI language</Text>
            <Picker
                mode='dropdown'
                selectedValue={locale}
                onValueChange={selectedLocale => onLanguageChange(selectedLocale)}
                style={styles.picker}
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
    </View>
  );
};// End of Functional Component
// End of file
