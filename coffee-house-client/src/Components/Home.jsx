import { useState } from "react";
import { useLoaderData,   } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
       
      <div className="grid grid-cols-2   gap-4 mx-5 my-8">
        {coffees &&
          coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>
          ))}
      </div>
    </div>
  );
};

export default Home;
