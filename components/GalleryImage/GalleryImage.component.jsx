import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TEXT_STYLES as textStyles } from "../../styles/text.styles";
import { GALLERY_IMAGE_STYLES as styles } from "./GalleryImage.styles";

const GalleryImageComponent = ({ photos }) => {
  return (
    <View style={styles.galleryImageMainContainer}>
      <View style={styles.galleryImageTopContainer}>
        <Text style={textStyles.xlarge}>Gallery App</Text>
      </View>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        contentInSet={{ bottom: 49 }}
        style={styles.galleryImageScrollContainer}
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
            key={photo.uri}
            source={{ uri: photo.uri }}
            style={styles.galleryImageImage}
          ></Image>
        ))}
      </ScrollView>
    </View>
  );
};
export default GalleryImageComponent;
