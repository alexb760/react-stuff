import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "dog", "cat", "reptile", "rabbit"];

const FormSearchComponent = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: ""
  });
  //const [pets, setPets] = useState([]);
  //const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const result = useQuery([ "search", requestParams ], fetchSearch);
  const pets = result?.data?.pets ?? [];


  // 1. By default Efects will load each time the componen is re render
  //    to change this behaviurs we can use and aditional parameter where we can set de dependecies.
  //  [] empty means reload only the firts time
  //  [location, animal, breed] means fetch any time the dependencies changes.
  // useEffect(() => {
  //   requestPets();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // async function requestPets() {
  //   const rest = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = await rest.json();
  //   setPets(json.pets);
  // }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //Browser API
          const formData = new FormData(e.target);
          const obj = {
            animal : formData.get("animal") ?? "",
            location : formData.get("location") ?? "",
            breed : formData.get("breed") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
          name="location"
            id="location"
            placeholder="Location" />
        </label>
        <label htmlFor="Animal">
          Animal
          <select
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
            id="animal"
            name="animal"
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="Breed">
          Breed
          <select
          name="breed"
            disabled={!breeds.length}
            id="breed"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default FormSearchComponent;
