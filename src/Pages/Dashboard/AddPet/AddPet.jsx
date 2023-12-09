import Swal from "sweetalert2";

const AddPet = () => {
  const handleAddPet = (e) => {
    e.preventDefault();
    const form = e.target;
    const PetImg = form.PetImg.value;
    const PetName = form.PetName.value;
    const PetAge = form.PetAge.value;
    const PetCategory = form.PetCategory.value;
    const petlocation = form.petlocation.value;
    const LongDescription = form.LongDescription.value;
    const newPet = {
      PetImg,
      PetName,
      PetCategory,
      LongDescription,
      petlocation,
      PetAge,
    };

    console.log(newPet);

    fetch("https://pet-adoption-server-snowy.vercel.app/pets", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
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
            <h1 className="text-3xl text-center">Add New Pet</h1>
            <form onSubmit={handleAddPet} className="card-body">
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
                  <span className="label-text">Pet Name</span>
                </label>
                <input
                  type="text"
                  name="PetName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pet Age</span>
                </label>
                <input
                  type="text"
                  name="PetAge"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pet Category</span>
                </label>
                <select
                  name="PetCategory"
                  id=""
                  className="select select-bordered"
                >
                  <option value="Nobel">Cats</option>
                  <option value="Drama">Dogs</option>
                  <option value="Thriller">Birds</option>
                  <option value="History">Fishes</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pet Location</span>
                </label>
                <input
                  type="text"
                  name="petlocation"
                  className="input input-bordered"
                  required
                />
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
                  Add Pet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
