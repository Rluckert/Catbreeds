import { View, ActivityIndicator, FlatList } from "react-native";
import { BreedCard } from "../molecules/BreedCard";
import ScreenContainer  from "../../components/atoms/ScreenContainer";

export default function ListBreedCard({ breeds }) {
  return (
    <ScreenContainer>
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
          renderItem={({ item }) => (
            <BreedCard breed={item} />
          )}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          removeClippedSubviews={true}
        />
      )}
      
    </ScreenContainer>
  );
}