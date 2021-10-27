import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../styles/colors.styles";
import { TEXT_STYLES as textStyles } from "../../styles/text.styles";
import { CAMERA_PREVIEW_STYLES as styles } from "./CameraPreview.styles";

const CameraPreviewComponent = ({ photo, retakePicture, savePhoto }) => {
  return (
    // CameraPreview Component
    <View style={styles.cameraPreviewMainContainer}>
      {/* ImageBackground takes a picture and gets covered from it */}
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={styles.imageBackground}
      >
        {/* Container for the Re-take and Save Photo buttons  */}
        <View style={styles.CameraPreviewContainer}>
          <View style={styles.cameraPreviewBottomContainer}>
            <TouchableOpacity
              onPress={retakePicture}
              style={styles.retakePictureButtons}
            >
              <Text
                style={{
                  ...textStyles.middle,
                  color: COLORS.primaryLight,
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={styles.retakePictureButtons}
            >
              <Text
                style={{
                  ...textStyles.middle,
                  color: COLORS.primaryLight,
                }}
              >
                Save photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default CameraPreviewComponent;
