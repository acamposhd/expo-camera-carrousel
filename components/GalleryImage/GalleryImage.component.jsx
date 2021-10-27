import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TEXT_STYLES as textStyles } from "../../styles/text.styles";
import { GALLERY_IMAGE_STYLES as styles } from "./GalleryImage.styles";

const GalleryImageComponent = ({ photos }) => {
  return (
    // GalleryImage Component
    <View style={styles.galleryImageMainContainer}>
      <View style={styles.galleryImageTopContainer}>
        <Text style={textStyles.xlarge}>Gallery App</Text>
      </View>
      {/* The ScrollView allow us to create a scrollable component */}
      <ScrollView
        automaticallyAdjustContentInsets={false} // All of those are props
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
        {/* We iterate over the photos array */}
        {photos?.map((photo) => (
          //And for each iteration we return an image
          <Image
            key={photo.uri}
            source={{ uri: photo.uri }} // Props, photo.uri is the current location of the image captured
            style={styles.galleryImageImage}
          ></Image>
        ))}
      </ScrollView>
    </View>
  );
};
export default GalleryImageComponent;
