import { View, Image, StyleSheet, Pressable } from "react-native";
import NoCatImage from "../../assets/cat_default.png";
import { useRouter } from "expo-router";
import TextAtom from "../atoms/Text";

export function BreedCard({ breed }) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/breed/[id]",
          params: { id: breed.id, name: breed.name },
        })
      }
      className="bg-white p-4 rounded-lg shadow w-full border border-black mb-4 active:opacity-70"
    >
      <View className="flex-row justify-between w-full mb-2">
        <TextAtom bold>{breed.name}</TextAtom>
        <TextAtom bold>More...</TextAtom>
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
    </Pressable>
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
