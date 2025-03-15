import { createBrowserRouter } from "react-router";
import MainLayoutes from "../Layoutes/MainLayoutes";
import ErrorElement from "../ErrorElemet/ErrorElement";
import AddCoffee from "../Components/AddCoffee";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";
import Users from "../Components/Users";
import Home from "../Components/Home";
import CoffeeDetails from "../Components/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes></MainLayoutes>,

    errorElement: <ErrorElement></ErrorElement>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffeeHouse"),
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffeeHouse/${params.id}`),
      },

      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
    ],
  },
]);
export default router;
