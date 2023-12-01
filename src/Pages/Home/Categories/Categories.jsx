import Category from "./Category";

const Categories = () => {
  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-6xl text-center mb-10">Categories</h1>

        <div className="grid grid-cols-4 gap-5">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Categories;
