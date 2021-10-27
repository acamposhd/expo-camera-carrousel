import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors.styles";

export const CAMERA_STYLES = StyleSheet.create({
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
  camera: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  cameraLeftOptionsContainer: {
    position: "absolute",
    left: "5%",
    top: "10%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  camerarightOptionsContainer: {
    position: "absolute",
    right: "5%",
    top: "5%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cameraBottomContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
  },
  cameraBottomInnerContainer: {
    alignSelf: "center",
    flex: 1,
    alignItems: "center",
  },
  cameraTakePictureButtonContainer: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: COLORS.primaryLight,
    shadowColor: COLORS.primaryDark,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  cameraTakePictureOnGalleryButton: {
    position: "absolute",
    bottom: 40,
    width: 120,
    borderRadius: 100,
    height: 120,
    backgroundColor: COLORS.primaryLight,
    shadowColor: COLORS.primaryDark,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  torchButton: {
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  backButton: {
    marginTop: 20,
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  switchCameraButton: {
    marginTop: 20,
    borderRadius: 50,
    height: 25,
    width: 25,
  },
});
