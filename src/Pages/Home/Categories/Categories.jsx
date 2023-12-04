import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCaegories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("http://localhost:5000/petcategory")
      .then((res) => res.json())
      .then((data) => setCaegories(data));
  }, []);
  console.log(categories);

  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-6xl text-center mb-10">Categories</h1>

        <div className="grid grid-cols-4 gap-5">
          {categories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
