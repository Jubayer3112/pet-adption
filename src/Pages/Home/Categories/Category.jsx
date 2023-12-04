/* eslint-disable react/prop-types */
const Category = ({ category }) => {
  console.log(category);
  const { name, image } = category;
  return (
    <div>
      <div className="border">
        <div className="bg-white shadow-lg rounded-lg  dark:bg-gray-800 dark:border-gray-700 text-center">
          <a href="#" className="inline-blok">
            <img
              className="rounded-t-lg p-8 w-56 inline-block"
              src={image}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                {name}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
