import { Link } from "react-router";

const SignUp = () => {
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);
  };

  return (
    <div>
      <div className="mt-5">
        <h3 className="text-5xl font-bold text-center">Sign up</h3>
      </div>
      <div>
        <div className="hero bg-base-200 mt-4 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSignup}>
                  <fieldset className="fieldset">
                    <label className="fieldset-label">Name :</label>
                    <input
                      name="name"
                      type="text"
                      className="input"
                      placeholder="Your name"
                      required
                    />
                    <label className="fieldset-label">Email :</label>
                    <input
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Email"
                      required
                    />
                    <label className="fieldset-label">Password :</label>
                    <input
                      name="password"
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">
                      Sign up or register
                    </button>
                  </fieldset>
                </form>
                <p className="my-2 py-2 text-green-600">
                  Already have an account please SignIn..{" "}
                  <button className="btn btn-primary">
                    <Link to="/signin">Sign in</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
