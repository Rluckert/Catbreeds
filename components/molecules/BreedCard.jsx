import { View, Image, StyleSheet, Animated, Pressable } from "react-native";
import { useEffect, useRef } from "react";
import NoCatImage from "../../assets/cat_default.png";
import { useRouter } from "expo-router";
import TextAtom from "../atoms/Text";

export function BreedCard({ breed }) {
  const router = useRouter();
  return (
    <View className="bg-white p-4 rounded-lg shadow w-full items-center border border-black mb-4">
      <View className="flex-row justify-between w-full mb-2">
        <TextAtom bold>{breed.name} </TextAtom>
        <Pressable
          onPress={() =>
            router.push({ pathname: "/breed/[id]", params: { id: breed.id, name: breed.name } })
          }
        >
          <TextAtom bold>More... </TextAtom>
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={breed.imageUrl ? { uri: breed.imageUrl } : NoCatImage}
          style={styles.image}
          resizeMode={breed.imageUrl ? "cover" : "center"}
        />
      </View>

      <View className="flex-row justify-between w-full mt-2">
        <TextAtom bold>{breed.origin}</TextAtom>
        <TextAtom bold>{breed.intelligence}</TextAtom>
      </View>
    </View>
  );
}

export function AnimatedBreedCard({ breed, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      delay: index * 150,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <BreedCard breed={breed} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 350,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
