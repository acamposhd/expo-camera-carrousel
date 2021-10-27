import { StyleSheet } from "react-native";

export const GALLERY_IMAGE_STYLES = StyleSheet.create({
  galleryImageMainContainer: {
    position: "absolute",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    top: 80,
  },
  galleryImageTopContainer: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  galleryImageScrollContainer: {
    padding: 0,
    margin: 0,
  },
  galleryImageImage: {
    width: 365,
    margin: 15,
    height: 600,
    resizeMode: "stretch",
    borderRadius: 10,
  },
});
