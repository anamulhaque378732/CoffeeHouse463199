import { Link } from "react-router";

const SignIn = () => {
  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div>
      <div className="mt-5">
        <h2 className="text-5xl text-center font-bold">Sign in</h2>
      </div>
      <div className="text-center w-1/2 bg-base-200 mx-auto my-5 p-4 rounded-4xl">
        <form className=" pb-8" onSubmit={handleSignin}>
          <h1 className=" w-1/2 text-start mx-auto py-1">Email :</h1>
          <input
            name="email"
            className="input join-item"
            type="email"
            placeholder="email"
          />
          <h1 className=" w-1/2 text-start mx-auto py-1">Password :</h1>
          <input
            name="password"
            className="input join-item"
            type="password"
            placeholder="password"
          />{" "}
          <br />
          <input
            className="bg-primary w-1/2 mt-2  rounded-xl p-2"
            type="submit"
            value="Sign in"
          />
        </form>

        <p className="my-2 py-2 text-red-600">
          New at this website please SignUp..{" "}
          <button className="btn btn-secondary">
            <Link  to="/signup">Sign Up</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
