import { StyleSheet } from "react-native";

export const CAMERA_PREVIEW_STYLES = StyleSheet.create({
  cameraPreviewMainContainer: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  CameraPreviewContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
    justifyContent: "flex-end",
  },
  cameraPreviewBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  retakePictureButtons: {
    width: 130,
    height: 40,
    alignItems: "center",
    borderRadius: 4,
  },
  imageBackground: {
    flex: 1,
  },
});
