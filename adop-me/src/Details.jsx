import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchPet from "./FetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], FetchPet);
  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐷</h2>
      </div>
    );
  }

  const pet = result.data.pets[0];

  return (
    <div>
      <div className="details">
        <div>
          <Carousel images={pet.images} />
          <div>
            <h1>{pet.name}</h1>
            <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
            <button>Adopt {pet.name}</button>
            <p>{pet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
