/**
 * Imports
 */
import { StyleSheet } from "react-native";

// Styles ==========================================================================================================
export const styles = StyleSheet.create({
  searchBar: {
    alignItems: "center",
    height: 280
  },
  topHeaderContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topHeaderMenuButton: {
    width: 50,
    height: 35,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
    backgroundColor: "orange"
  },
  picker: {
    height: 35,
    width: 85,
    backgroundColor: "white"
  },
  pickerItem: {
    textAlign: "left",
    height: 40,
    width: 85
  },
  inputFieldsContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    marginTop: 25
  },
  inputField: {
    height: 38,
    width: 280,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    marginBottom: 10,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  addressInputFieldContainer: { 
    flex: 1,
    flexDirection: "row", 
    height: 37 
  },
  addressInputField: {
    height: 37,
    width: 240,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    marginBottom: 10,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0
  },
  searchButton: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009dff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15
  },
  searchButtonTextStyle: {
    paddingTop: 9,
    paddingBottom: 9,
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center"
  },
  sortButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: 5
  },
  sortButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009dff",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3
  },
  activeSortButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f779ee",
    borderWidth: 1,
    borderColor: "black"
  },
  sortButtonTextStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center"
  },
  businessesList: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    marginBottom: 5,
    color: "black"
  },
  businessHeader: {
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 26,
    marginBottom: 10
  },
  businessContent: {
    paddingLeft: 5,
    color: "black",
    fontSize: 16,
    paddingTop: 5,
    fontWeight: "bold"
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 250,
    marginTop: 10,
    marginBottom: 10
  },
  businessImage: {
    flex: 1,
    width: "95%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1
  },
  businessButton: {
    width: 100,
    height: 35,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    backgroundColor: "orange"
  },
  inactiveBusinessButton: {
    width: 110,
    height: 35,
    borderRadius: 3,
    backgroundColor: "white"
  },
  businessButtonContainer: {
    flexDirection: "row",
    marginLeft: 7,
    marginTop: 5,
    fontSize: 12
  },
  businessButtonText: {
    fontSize: 13,
    paddingRight: 2,
    color: "white"
  },
  spinner: {
    marginTop: 150
  },
  geolocationButton: {
    width: 40,
    height: 37,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: "white",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  },
  errorMessage: {
    color: "red",
    padding: 20,
    fontSize: 20,
    textAlign: "center"
  },
  ratingContainer: {
    marginLeft: 5,
    marginTop: 10
  }
}); // Styles end ==========================================================================================================
// End of file
