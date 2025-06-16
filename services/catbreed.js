import { API_KEY } from '@env';

export async function getBreeds() {
  const GET_BREEDS = "https://api.thecatapi.com/v1/breeds";

  const rawData = await fetch(GET_BREEDS, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  });

  const json = await rawData.json();
  return json.map((item) => {
    const {
      id,
      name,
      origin,
      intelligence,
      description,
      life_span,
      adaptability,
    } = item;

    const imageUrl = item.image?.url;

    return {
      id,
      name,
      origin,
      intelligence,
      description,
      imageUrl,
      life_span,
      adaptability,
    };
  });
}