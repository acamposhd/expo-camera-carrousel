import React, { useState } from "react";
import { Camera } from "expo-camera";
import { Text, TouchableOpacity, View } from "react-native";
import { CAMERA_TYPES, FLASH_MODES } from "../../constants/constants";
import { COLORS } from "../../styles/colors.styles";
import { TEXT_STYLES as textStyles } from "../../styles/text.styles";
import { CAMERA_STYLES as styles } from "./Camera.styles";

const CameraComponent = ({
  setCapturedImage,
  setPreviewVisible,
  setStartCamera,
}) => {
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState("off");

  const __takePicture = async () => {
    const photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
  };
  const __handleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode("off");
    } else if (flashMode === "off") {
      setFlashMode("on");
    } else {
      setFlashMode("auto");
    }
  };
  const __switchCamera = () => {
    if (cameraType === "back") {
      setCameraType("front");
    } else {
      setCameraType("back");
    }
  };
  const __back = () => {
    setStartCamera(false);
  };

  let camera = Camera;
  return (
    <Camera
      type={cameraType}
      flashMode={flashMode}
      style={styles.camera}
      ref={(r) => {
        camera = r;
      }}
    >
      <View style={styles.cameraContainer}>
        <View style={styles.cameraLeftOptionsContainer}>
          <TouchableOpacity
            onPress={__handleFlashMode}
            style={{
              ...styles.torchButton,
              backgroundColor:
                flashMode === FLASH_MODES.off
                  ? COLORS.primaryDark
                  : COLORS.primaryLight,
            }}
          >
            <Text style={textStyles.middle}>⚡️</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={__switchCamera}
            style={styles.switchCameraButton}
          >
            <Text style={textStyles.middle}>
              {cameraType === CAMERA_TYPES.front ? "🤳" : "📷"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.camerarightOptionsContainer}>
          <TouchableOpacity onPress={__back} style={styles.backButton}>
            <Text style={textStyles.xlarge}>←</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cameraBottomContainer}>
          <View style={styles.cameraBottomInnerContainer}>
            <TouchableOpacity
              onPress={__takePicture}
              style={styles.cameraTakePictureButtonContainer}
            />
          </View>
        </View>
      </View>
    </Camera>
  );
};

export default CameraComponent;
