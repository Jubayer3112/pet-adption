const PetListing = () => {
  return (
    <div>
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
      <h1>All pet here</h1>
    </div>
  );
};

export default PetListing;
