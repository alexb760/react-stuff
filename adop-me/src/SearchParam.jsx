import { useState } from "react";
const ANIMALS = ["bird", "dog", "cat", "reptail"] 

const SearchParam = () =>{
    const [localtion, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input onChange={e => setLocation(e.target.value)} id="locatin" value={location} placeholder="location"></input>
                </label>
                <label htmlFor="Anilam">
                    Animal
                    <select
                    onChange={e => {setAnimal(e.target.value)}}
                    id="animal"
                    value={animal}>
                        <option />
                        {ANIMALS.map(animal => (
                            <option key={animal} value={animal}> {animal}</option>
                        ))}
                    </select>
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}

export default SearchParam;