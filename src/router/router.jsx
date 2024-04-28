import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import TouristSpotDetails from "../pages/TouristSpotDetails/TouristSpotDetails";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import MyList from "../pages/MyList/MyList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot />,
        loader: () => fetch("http://localhost:5000/allTouristSpot"),
      },
      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/touristSpot/:id",
        element: (
          <PrivateRoute>
            <TouristSpotDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
