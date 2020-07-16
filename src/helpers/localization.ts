import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from '../locales/en';
import fr from '../locales/fr';
import es from '../locales/es';
import de from '../locales/de';
import ru from '../locales/ru';
import hi from '../locales/hi';
import ja from '../locales/ja';
import zh from '../locales/zh';


// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// List of available locales
const listOfLocales =  ['en', 'fr', 'es', 'de', 'ru', 'hi', 'ja', 'zh'];

// Define the supported translations
I18n.translations = {en, fr, es, de, ru, hi, ja, zh};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL =
  currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export const getLocalizedStringFor = (name: string, params = {}) => {
  return I18n.t(name, params);
}

// Method returns the list of available locales
export const getListOfAvailableLocales = ():string[] => {
  return listOfLocales;
}

// The method we'll use instead of a regular string
export const setLocale = (locale: string):void => {
  I18n.locale = locale;
}
// End of file
