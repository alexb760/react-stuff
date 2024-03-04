import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "dog", "cat", "reptail"];

const SearchParam = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);

  // 1. By default Efects will load each time the componen is re render
  //    to change this behaviurs we can use and aditional parameter where we can set de dependecies.
  //  [] empty means reload only the firts time
  //  [location, animal, breed] means fetch any time the dependencies changes.
  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const rest = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await rest.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="locatin"
            value={location}
            placeholder="Location"
          ></input>
        </label>
        <label htmlFor="Anilam">
          Animal
          <select
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            id="animal"
            value={animal}
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
            disabled={!breeds.length}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
            id="breed"
            value={breed}
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
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParam;
