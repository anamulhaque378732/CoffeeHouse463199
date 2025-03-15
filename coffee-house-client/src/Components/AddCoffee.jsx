import Swal from 'sweetalert2'


const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch("http://localhost:5000/coffeeHouse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          
          Swal.fire({
            title: "success",
            text: "Coffee added successfully",
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
        <form className=" pb-8" onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-2  gap-4 w-1/2 mx-auto ">
            <div className="">
              <h1>Coffee name :</h1>
              <input
                className="input join-item"
                type="text"
                name="name"
                placeholder="Coffee name"
              />
            </div>
            <div className="">
              <h1>Quantity</h1>
              <input
                name="quantity"
                className="input join-item"
                type="text"
                placeholder="Quantity"
              />
            </div>
            <div className="">
              <h1>Supplier :</h1>
              <input
                name="supplier"
                className="input join-item"
                type="text"
                placeholder="Coffee Supplier"
              />
            </div>
            <div className="">
              <h1>Taste :</h1>
              <input
                name="taste"
                className="input join-item"
                type="text"
                placeholder="Coffee taste"
              />
            </div>
            <div className="">
              <h1>Category :</h1>
              <input
                name="category"
                className="input join-item"
                type="text"
                placeholder="Coffee category"
              />
            </div>
            <div className="">
              <h1>Details :</h1>
              <input
                name="details"
                className="input join-item"
                type="text"
                placeholder="Coffee details"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="w-1/2 text-start mx-auto">photoUrl :</h1>
            <input
              name="photo"
              className="input w-1/2 join-item"
              type="text"
              placeholder="url"
            />
          </div>

          <div className="text-center text-2xl text-white font-medium mt-2 w-full">
            <input
              className="bg-primary w-1/2 rounded-xl p-2 m-2"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
