/* eslint-disable react/prop-types */
const CampaignCard = ({ pet }) => {
    console.log(pet);
    const { PetImg, PetName,DonationAmount } = pet;
    return (
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={PetImg} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{PetName}</h2>
            <h1>Donate :  ${DonationAmount}</h1>

            <div className="card-actions ">
              <button className="btn btn-primary">Donate</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CampaignCard;
  