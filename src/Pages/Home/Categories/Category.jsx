const Category = () => {
  return (
    <div>
      <div className="border">
        <div className="bg-white shadow-lg rounded-lg  dark:bg-gray-800 dark:border-gray-700 text-center">
          <a href="#" className="inline-blok">
            <img
              className="rounded-t-lg p-8 w-56 inline-block"
              src="https://fullkit.moxcreative.com/pawpaw/wp-content/uploads/sites/12/elementor/thumbs/cat-psfohq519m9ha6coxp9o3h7n8nk2ta72kzszvmo1kw.png"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                Cats
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
