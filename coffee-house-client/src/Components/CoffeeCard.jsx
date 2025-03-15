import { Link } from "react-router";


const CoffeeCard = ({ coffee }) => {
  const { name, photo, supplier, taste, _id } = coffee;
  return (
    <div>
      {" "}
      <div className="card card-side rounded-3xl p-4 m-2 bg-base-200  ">
        <figure>
          <img src={photo} alt="coffee" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold"> Name : {name}</h2>
          <p className="text-xl font-medium"> Supplier : {supplier} </p>
          <h2>Taste : {taste}</h2>
          <div>
            <button className="btn btn-secondary">
              <Link to={`/coffeeDetails/${_id}`}>Details</Link>
            </button>{" "}
            <button className="btn bg-primary text-white"> Update</button>{" "}
            <button className="btn bg-red-500 text-white"> X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
