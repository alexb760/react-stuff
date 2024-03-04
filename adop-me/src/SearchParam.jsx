import { useState } from "react";
const ANIMALS = ["bird", "dog", "cat", "reptail"];

const SearchParam = () => {
  const [localtion, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="locatin"
            value={location}
            placeholder="location"
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
                {" "}
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="Breed">
          Breed
          <select
            disabled={!breds.length === 0}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
            id="breed"
            value={animal}
          >
            <option />
            {breds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParam;
