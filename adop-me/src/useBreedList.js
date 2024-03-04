import { useState, useEffect } from "react";

const breedListCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("inloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (breedListCache[animal]) {
      setBreedList(breedListCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const response = await res.json();
      breedListCache[animal] = response.breeds || [];
      setBreedList(breedListCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
