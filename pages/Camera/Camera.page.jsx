import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Camera } from "expo-camera";
import CameraComponent from "../../components/Camera";
import CameraPreview from "../../components/CameraPreview";
import GalleryImage from "../../components/GalleryImage";
import { CAMERA_PAGE_STYLES as styles } from "./Camera.page.styles";

const CameraPage = () => {
  const [photos, setPhotos] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const __startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };
  const __savePhoto = () => {
    setPhotos((currentPhotos) => {
      return [...currentPhotos, capturedImage];
    });
    setPreviewVisible(false);
    setStartCamera(false);
  };
  const __retakePicture = () => {
    setCapturedImage(null);
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
          {previewVisible && capturedImage ? (
            <CameraPreview
              photo={capturedImage}
              savePhoto={__savePhoto}
              retakePicture={__retakePicture}
            />
          ) : (
            <CameraComponent
              setCapturedImage={setCapturedImage}
              setPreviewVisible={setPreviewVisible}
              setStartCamera={setStartCamera}
            />
          )}
        </View>
      ) : (
        <>
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
