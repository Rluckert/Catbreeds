import { View, Image, StyleSheet } from "react-native";
import NoCatImage from "../../assets/cat_default.png";

export default function BreedImage({ imageUrl, height = 350 }) {
  return (
    <View style={[styles.imageContainer, { height }]} className="mt-1">
      <Image
        source={imageUrl ? { uri: imageUrl } : NoCatImage}
        style={styles.image}
        resizeMode={imageUrl ? "cover" : "center"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
