import { useLoaderData } from "react-router-dom";
import ListingCard from "./ListingCard";

const PetListing = () => {
  const pets = useLoaderData();
  console.log(pets);
  return (
    <div className="">
      <div
        className="hero h-[60vh]"
        style={{
          backgroundImage:
            "url(https://av.sc.com/sg/content/images/sg-pet-owner-article-masthead-1800x564.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-white text-8xl font-bold">Pet listing</h1>
          </div>
        </div>
      </div>


      <div className="container mx-auto">
        <h1>All pet here:{pets.length}</h1>
        <div className="grid grid-cols-3 gap-7">
          {pets.map((pet) => (
            <ListingCard key={pet._id} pet={pet} />
          ))}
        </div>
      </div>


      
    </div>
  );
};

export default PetListing;
