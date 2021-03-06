/**
 * Imports
 */
import { StyleSheet } from 'react-native';
import { height, Colors, Sizes, width } from './GlobalStyles';

// Styles ==========================================================================================================
export const styles = StyleSheet.create({
  searchBar: {
    height: 0.3 * height,
  },
  topHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  topHeaderMenuButton: {
    width: 48,
    height: 35,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 0,
    backgroundColor: Colors.orange
  },
  picker: {
    height: 35,
    width: 85,
    backgroundColor: Colors.white
  },
  inputFieldsContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '3%',
  },
  inputField: {
    height: 38,
    width: '75%',
    borderRadius: 5,
    borderColor: Colors.black,
    borderWidth: 1,
    backgroundColor: Colors.white,
    marginBottom: 10,
    paddingLeft: 10,
  },
  addressInputFieldContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 37,
  },
  addressInputField: {
    height: 37,
    width: '64%',
    borderRadius: 5,
    borderColor: Colors.black,
    borderWidth: 1,
    backgroundColor: Colors.white,
    paddingLeft: 10,
    borderRightWidth: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  searchButton: {
    width: 200,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light_blue,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.black,
    marginBottom: 5,
  },
  searchBarButtonTextStyle: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: Sizes.buttonFontSize,
    fontWeight: 'bold',
  },
  sortButtonsContainer: {
    flexDirection: 'row',
  },
  sortButton: {
    flex: 1,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light_blue,
    borderWidth: 1,
    borderColor: Colors.black,

  },
  activeSortButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darker_blue,
    borderWidth: 1,
    borderColor: Colors.black
  },
  businessesList: {
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    marginBottom: 5
  },
  businessHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Sizes.businessHeaderFontSize,
    marginBottom: 10
  },
  businessContent: {
    paddingLeft: 5,
    fontSize: Sizes.businessContentFontSize,
    paddingTop: 5,
    fontWeight: 'bold'
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    height: 0.23 * height,
    marginVertical: 10,
  },
  businessImage: {
    flex: 1,
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
  },
  businessButton: {
    width: 100,
    height: 35,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 3,
    backgroundColor: Colors.orange,
  },
  businessButtonContainer: {
    flexDirection: 'row',
    marginLeft: 7,
    marginTop: 5,
  },
  businessButtonText: {
    fontSize: Sizes.businessContentButtonFontSize,
    paddingRight: 2,
    color: Colors.white,
  },
  spinner: {
    top: 0.3 * height
  },
  geolocationButton: {
    width: 40,
    height: 37,
    borderRadius: 5,
    borderColor: Colors.black,
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  errorMessage: {
    color: Colors.red,
    padding: 20,
    fontSize: Sizes.errorMessageFontSize,
    textAlign: 'center'
  },
  ratingContainer: {
    marginLeft: 5,
    marginTop: 10,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  settingRowText: {
    fontSize: Sizes.businessContentFontSize,
    fontWeight: 'bold',
  }
}); // Styles end ==========================================================================================================
// End of file
