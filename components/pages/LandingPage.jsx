import { useEffect, useState } from "react";
import ListBreedCard from "../organisms/ListBreedCard";
import { getBreeds } from "../../services/catbreed";
import { View } from "react-native";
import { SearchBar } from "../molecules/SearchBar";

export default function LandingPage() {
  const [allBreeds, setAllBreeds] = useState([]);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const result = await getBreeds();
        setAllBreeds(result);
        setBreeds(result);
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    };
    fetchBreeds();
  }, []);

  const handleSearch = (text) => {
    const query = text.trim().toLowerCase();
    if (query === "") {
      setBreeds(allBreeds);
    } else {
      const filtered = allBreeds.filter((breed) =>
        breed.name.toLowerCase().includes(query)
      );
      setBreeds(filtered);
    }
  };

  return (
    <View className="flex-1 bg-white pt-4 px-2">
      <SearchBar
        placeholder="Buscar raza..."
        onChangeText={(text) => {
          handleSearch(text);
        }}
      />
      <ListBreedCard breeds={breeds} />
    </View>
  );
}
