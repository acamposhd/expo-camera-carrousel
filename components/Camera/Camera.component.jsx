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
  // States to handle flash mode and camera type
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState("off");

  // Function to take a picture
  const __takePicture = async () => {
    // This line takes the picture and returns the state of the promise to the photo constant
    const photo = await camera.takePictureAsync();

    // We set the preview page as visible and then we send the image that we have just taken
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  // Function to switch betweem flash modes
  const __handleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode("off");
    } else if (flashMode === "off") {
      setFlashMode("on");
    } else {
      setFlashMode("auto");
    }
  };

  // Function to switch between camera modes
  const __switchCamera = () => {
    if (cameraType === CAMERA_TYPES.back) {
      setCameraType(CAMERA_TYPES.front);
    } else {
      setCameraType(CAMERA_TYPES.back);
    }
  };

  // Function to go back from the camera view
  const __back = () => {
    setStartCamera(false);
  };

  // Instance of the Camera object
  let camera = Camera;
  return (
    <Camera
      type={cameraType}
      flashMode={flashMode}
      style={styles.camera}
      ref={(r) => {
        camera = r; //Passing always the current reference to the global camera
      }}
    >
      {/* Buttons to handle flash, camera type and go back */}
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

        {/* Button to take the picture */}
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
