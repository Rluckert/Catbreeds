import { View, ActivityIndicator, FlatList } from "react-native";
import { AnimatedBreedCard} from "../molecules/BreedCard";

export default function ListBreedCard({ breeds }) {
  return (
    <View>
      {breeds.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <FlatList
          data={breeds}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <AnimatedBreedCard breed={item} index={index} />
          )}
        />
      )}
      
    </View>
  );
}