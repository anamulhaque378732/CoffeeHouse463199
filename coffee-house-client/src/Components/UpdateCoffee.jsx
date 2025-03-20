import React from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";
const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
    console.log(coffee);
    
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffeeHouse/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "successfully updated",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="my-10 lg:mx-30 rounded-2xl bg-gray-200 ">
        <h1 className="text-6xl my-4 text-center">Add a Coffee ....</h1>
        <form className=" pb-8" onSubmit={handleUpdate}>
          <div className="grid grid-cols-2  gap-4 w-1/2 mx-auto ">
            <div className="">
              <h1>Coffee name :</h1>
              <input
                className="input join-item"
                type="text"
                name="name"
                defaultValue={name}
              />
            </div>
            <div className="">
              <h1>Quantity</h1>
              <input
                name="quantity"
                className="input join-item"
                type="text"
                defaultValue={quantity}
              />
            </div>
            <div className="">
              <h1>Supplier :</h1>
              <input
                name="supplier"
                className="input join-item"
                type="text"
                defaultValue={supplier}
              />
            </div>
            <div className="">
              <h1>Taste :</h1>
              <input
                name="taste"
                className="input join-item"
                type="text"
                defaultValue={taste}
              />
            </div>
            <div className="">
              <h1>Category :</h1>
              <input
                name="category"
                className="input join-item"
                type="text"
                defaultValue={category}
              />
            </div>
            <div className="">
              <h1>Details :</h1>
              <input
                name="details"
                className="input join-item"
                type="text"
                defaultValue={details}
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="w-1/2 text-start mx-auto">photoUrl :</h1>
            <input
              name="photo"
              className="input w-1/2 join-item"
              type="text"
              defaultValue={photo}
            />
          </div>

          <div className="text-center text-2xl text-white font-medium mt-2 w-full">
            <input
              className="bg-primary w-1/2 rounded-xl p-2 m-2"
              type="submit"
              value="Update Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
