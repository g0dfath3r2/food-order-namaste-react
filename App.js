import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./src/components/Home/Home";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import UserInfoContext from "./src/utils/contextAPI/UserInfoContext";
import { Provider } from "react-redux";
import CartStore from "./src/utils/redux/store";
import Cart from "./src/components/Cart/Cart";

const RestaurantMenu = lazy(() =>
  import("./src/components/RestaurantMenu/RestaurantMenu")
);

function App() {
  const [fullName, setFullName] = useState("")
  const UserContext = useContext(UserInfoContext);
  useEffect(()=>{
    const data = "Avijeet kajal"

    setFullName(data)
  },[])
  return (
    <div>
      <Provider store={CartStore} >
      <UserInfoContext.Provider value={{fullName: fullName, setFullName}}>
        <Header />
        <Outlet />
      </UserInfoContext.Provider>
      </Provider>
    </div>
  );
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    error: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router}></RouterProvider>);
