import { ScrollView, View } from "react-native";
import BreedDetailItem from "../molecules/BreedDetailItem";
import BreedImage from "../atoms/BreedImage";

export default function BreedInfoSection({ breed }) {
  return (
    <View className="w-full h-full bg-white px-1">
      <BreedImage
        imageUrl={breed.imageUrl}
        height={450}/>
      <ScrollView
        className="flex-1 px-4 pt-2"
        showsVerticalScrollIndicator={false}
      >
        <BreedDetailItem label="Description" value={breed.description} />
        <BreedDetailItem label="Origin" value={breed.origin} />
        <BreedDetailItem
          label="Intelligence"
          value={breed.intelligence?.toString()}
        />
        <BreedDetailItem
          label="Adaptability"
          value={breed.adaptability?.toString()}
        />
        <BreedDetailItem label="Lifespan" value={`${breed.life_span} years`} />
      </ScrollView>
      </View>
  );
}
