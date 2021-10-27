import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Camera } from "expo-camera";
import CameraComponent from "../../components/Camera";
import CameraPreview from "../../components/CameraPreview";
import GalleryImage from "../../components/GalleryImage";
import { CAMERA_PAGE_STYLES as styles } from "./Camera.page.styles";

const CameraPage = () => {
  //Our photos array state and its update function
  const [photos, setPhotos] = useState([]);

  //Boolean values that will help us to handle which screen and what is shown on the screen
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);

  //The state for the captured image that will be displayed on the preview and gallery
  const [capturedImage, setCapturedImage] = useState(null);

  //Function to start the camera
  const __startCamera = async () => {
    //This line will ask for permission to use the camera
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      // If permission is granted we start the camera
      setStartCamera(true);
    } else {
      // if not we show an alert to make the user aware
      Alert.alert("Access denied");
    }
  };

  // Function to save a photo
  const __savePhoto = () => {
    // It takes the current state of the photos state and the new one
    setPhotos((currentPhotos) => {
      return [capturedImage, ...currentPhotos];
    });

    // We disable the preview and the camera to get back to the gallery
    setPreviewVisible(false);
    setStartCamera(false);
  };
  // Function to remove current picture and go to the camera component
  const __retakePicture = () => {
    // We remove the current image from state
    setCapturedImage(null);

    // We set the preview view as false and then we strart the camera
    setPreviewVisible(false);
    __startCamera();
  };
  return (
    //Main view
    <View style={styles.container}>
      {/* We check if the startCamera state is true and if so we show another view taht will be the container above the camera */}
      {startCamera ? (
        <View style={styles.mainCameraContainer}>
          {/* We check if there is an image captured and if the preview is visible and if so we show the Camera Preview Component */}
          {/* If there's no image captured then we start the Camera Component */}
          {previewVisible && capturedImage ? (
            <CameraPreview
              photo={capturedImage} //Props
              savePhoto={__savePhoto} // Props
              retakePicture={__retakePicture} //Props
            />
          ) : (
            <CameraComponent
              setCapturedImage={setCapturedImage} //Props
              setPreviewVisible={setPreviewVisible} //Props
              setStartCamera={setStartCamera} //Props
            />
          )}
        </View>
      ) : (
        <>
          {/* When startCamera is not true, then we show the GalleryImage Component */}
          <GalleryImage photos={photos} />

          <TouchableOpacity
            onPress={__startCamera}
            style={styles.cameraTakePictureOnMain}
          />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

export default CameraPage;
