import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";

/*
Header
    Logo
    nav menu
    cart
Body
    search
    res-container
    res-card
        image
        Name
        cuisine
        star rating


Footer
    link
    Copyright

*/

const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
