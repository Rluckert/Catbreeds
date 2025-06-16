import { useEffect } from "react";
import ListBreedCard from "../organisms/ListBreedCard";
import { getBreeds } from "../../services/catbreed";
import { View } from "react-native";
import { SearchBar } from "../molecules/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setBreeds, setFilteredBreeds } from "../../store/breedsSlice";

export default function LandingPage() {
  const dispatch = useDispatch();
  const allBreeds = useSelector((state) => state.breeds.breedList);
  const filteredBreeds = useSelector((state) => state.breeds.filteredBreedList);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const result = await getBreeds();
        dispatch(setBreeds(result));
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    };
    fetchBreeds();
  }, [dispatch]);

  const handleSearch = (text) => {
    const query = text.trim().toLowerCase();
    if (query === "") {
      dispatch(setFilteredBreeds(allBreeds));
    } else {
      const filtered = allBreeds.filter((breed) =>
        breed.name.toLowerCase().includes(query)
      );
      dispatch(setFilteredBreeds(filtered));
    }
  };

  return (
    <View className="flex-1 bg-white pt-4 px-2">
      <SearchBar placeholder="Search breed..." onChangeText={handleSearch} />
      <ListBreedCard breeds={filteredBreeds} />
    </View>
  );
}
