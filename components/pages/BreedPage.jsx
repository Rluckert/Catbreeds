import BreedInfoSection from "../organisms/BreedInfoSection";
import { useSelector } from "react-redux";

export default function BreedPage({ id }) {
  const breed = useSelector((state) =>
    state.breeds.breedList.find((b) => b.id === id)
  );
  return <BreedInfoSection breed={breed} />;
}
