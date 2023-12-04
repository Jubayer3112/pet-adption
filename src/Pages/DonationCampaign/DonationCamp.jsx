import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";

const DonationCamp = () => {
  const campaignPets = useLoaderData();
  console.log(campaignPets);
  return (
    <div>
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage:
            "url(https://www.dogtrainingnation.com/wp-content/uploads/2015/08/do-donations-to-stray-dogs-actually-help.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-white text-8xl font-bold">
              Donation Campaign:{campaignPets.length}
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h1>Donation Campaign:{campaignPets.length}</h1>
        <div className="grid grid-cols-3 gap-7">
          {campaignPets.map((camp) => (
            <CampaignCard key={camp._id} pet={camp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationCamp;
