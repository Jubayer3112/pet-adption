/* eslint-disable react/prop-types */
const ListingCard = ({ pet }) => {
  console.log(pet);
  const { PetImg, PetName, PetAge, petlocation } = pet;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={PetImg} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{PetName}</h2>
          <h1>Age : {PetAge} Days</h1>
          <h1>Location : {petlocation}</h1>
          <div className="card-actions ">
            <button className="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
