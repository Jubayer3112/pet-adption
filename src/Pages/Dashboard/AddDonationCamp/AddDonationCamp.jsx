import Swal from "sweetalert2";

const AddDonationCamp = () => {
  const handleCreateDonation = (e) => {
    e.preventDefault();
    const form = e.target;
    const PetImg = form.PetImg.value;
    const DonationAmount = form.DonationAmount.value;
    const LongDescription = form.LongDescription.value;
    const newPet = {
      PetImg,
      DonationAmount,
      LongDescription,
    };

    console.log(newPet);

    fetch(
      "https://pet-adoption-server-dlurtrqef-jubayer3112.vercel.app/addcampaign",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newPet),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your Pet added",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 py-10">
        <div className="hero-content ">
          <div className="card py-6 lg:w-[700px] w-full shadow-2xl bg-base-100">
            <h1 className="text-3xl text-center">Create a campaign</h1>
            <form onSubmit={handleCreateDonation} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pet Image URL</span>
                </label>
                <input
                  type="url"
                  name="PetImg"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Maximum Donation Ammount</span>
                </label>
                <input
                  type="text"
                  name="DonationAmount"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  name="shortDescription"
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Long Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  name="LongDescription"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDonationCamp;
