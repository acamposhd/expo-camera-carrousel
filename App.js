import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Camera } from "expo-camera";
let camera = Camera;
export default function App() {
  const [photos, setPhotos] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState("off");

  const __startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };
  const __takePicture = async () => {
    const photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
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
  return (
    <View style={styles.container}>
      {startCamera ? (
        <View
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          {previewVisible && capturedImage ? (
            <CameraPreview
              photo={capturedImage}
              savePhoto={__savePhoto}
              retakePicture={__retakePicture}
            />
          ) : (
            <Camera
              type={cameraType}
              flashMode={flashMode}
              style={{ flex: 1 }}
              ref={(r) => {
                camera = r;
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "transparent",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    left: "5%",
                    top: "10%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    onPress={__handleFlashMode}
                    style={{
                      backgroundColor: flashMode === "off" ? "#000" : "#fff",
                      borderRadius: 50,
                      height: 25,
                      width: 25,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                      }}
                    >
                      ⚡️
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={__switchCamera}
                    style={{
                      marginTop: 20,
                      borderRadius: 50,
                      height: 25,
                      width: 25,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                      }}
                    >
                      {cameraType === "front" ? "🤳" : "📷"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    position: "absolute",
                    right: "5%",
                    top: "5%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    onPress={__back}
                    style={{
                      marginTop: 20,
                      borderRadius: 50,
                      height: 25,
                      width: 25,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 40,
                        fontWeight: "bold",
                      }}
                    >
                      ←
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    flexDirection: "row",
                    flex: 1,
                    width: "100%",
                    padding: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignSelf: "center",
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={__takePicture}
                      style={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        borderRadius: 50,
                        backgroundColor: "#fff",
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 6,
                        },
                        shadowOpacity: 0.37,
                        shadowRadius: 7.49,

                        elevation: 12,
                      }}
                    />
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      ) : (
        <>
          <GalleryImage photos={photos} />

          <TouchableOpacity
            onPress={__startCamera}
            style={{
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
            }}
          />
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const CameraPreview = ({ photo, retakePicture, savePhoto }) => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            padding: 15,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={{
                width: 130,
                height: 40,

                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={{
                width: 130,
                height: 40,

                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                save photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const GalleryImage = ({ photos }) => {
  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "100%",
        width: "100%",
        top: 80,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "10%",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,
          }}
        >
          Gallery
        </Text>
      </View>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        contentInSet={{ bottom: 49 }}
        style={{ padding: 0, margin: 0 }}
        horizontal={true}
        alwaysBounceHorizontal={true}
        bounces={true}
        decelerationRate="normal"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        pagingEnabled={true}
      >
        {photos?.map((photo) => (
          <Image
            source={{ uri: photo.uri }}
            style={{
              width: 365,
              margin: 15,
              height: 600,
              resizeMode: "cover",
              borderRadius: 10,
            }}
          ></Image>
        ))}
      </ScrollView>
    </View>
  );
};
