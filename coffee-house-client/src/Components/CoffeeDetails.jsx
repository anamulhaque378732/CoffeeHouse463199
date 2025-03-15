import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const loadedCoffeeDetails = useLoaderData();

  const { name, quantity, supplier, taste, category, details, photo } =
    loadedCoffeeDetails;

  return (
    <div className="  text-center my-12 rounded-3xl lg:mx-48 bg-base-200  px-auto">
      <div className="grid grid-cols-2 p-8">
        <div>
          <img src={photo} alt=" coffee" />
        </div>
        <div>
          <p className="text-2xl font-bold"> Name: {name}</p>
          <p>Quantity : {quantity}</p>
          <p className="text-xl"> Supplier : {supplier}</p>
          <p> Taste : {taste}</p>
          <p>Category : {category}</p>
          <p> Details : {details}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
