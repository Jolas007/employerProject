import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignUpPage from "./components/pages/SignUpPage";
import axiosInstance, { setAccessToken } from "./axiosInstance";
import SignInPage from "./components/pages/SignInPage";
import ProtectedRoute from "./components/hoc/ProtectedRoute";
import CartPage from "./components/pages/CartPage";
import SockGeneratorPage from "./components/pages/SockGeneratorPage";

function App() {
  const [user, setUser] = useState();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/tokens/refresh")
      .then((res) => {
        const { user, accessToken } = res.data;
        setUser(user);
        setAccessToken(accessToken);
      })
      .catch(() => {
        setUser(null);
        setAccessToken("");
      });
  }, []);
  const addToCartHandler = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post("/auth/signup", data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post("/auth/signin", data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
    window.location.href = "/";
  };

  const handleLogout = async () => {
    const res = await axiosInstance.post("/auth/logout");
    if (res.status === 200) {
      setUser(null);
      setAccessToken("");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} handleLogout={handleLogout} />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute isAllowed={!!user} redirectPath="/signin">
              <MainPage user={user} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute isAllowed={!!user} redirectPath="/signin">
              <CartPage cartItems={cartItems} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/generator",
          element: (
            <ProtectedRoute isAllowed={!!user} redirectPath="/signin">
              <SockGeneratorPage addToCartHandler={addToCartHandler} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <ProtectedRoute isAllowed={!user} redirectPath="/">
              <SignUpPage handleSignUp={handleSignUp} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/signin",
          element: (
            <ProtectedRoute isAllowed={!user} redirectPath="/">
              <SignInPage handleSignIn={handleSignIn} />
            </ProtectedRoute>
          ),
        },

        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
