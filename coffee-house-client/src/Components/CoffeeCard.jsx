import { Link } from "react-router";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { name, photo, supplier, taste, _id } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffeeHouse/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

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
            <button className="btn bg-primary text-white">
              {" "}
              <Link to={`/updateCoffee/${_id}`}> Update</Link>
            </button>{" "}
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 text-white"
            >
              {" "}
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
