import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors.styles";

export const CAMERA_PAGE_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  mainCameraContainer: {
    flex: 1,
    width: "100%",
  },
  cameraTakePictureOnMain: {
    position: "absolute",
    bottom: 40,
    width: 120,
    borderRadius: 100,
    height: 120,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
