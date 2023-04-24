import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import AvailableCoinsView from "./Views/AvailableCoins";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoinView from "./Views/Coin";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App h-screen bg-gray-10">
        <Header></Header>
        <AvailableCoinsView></AvailableCoinsView>
        <ToastContainer></ToastContainer>
      </div>
    ),
  },
  {
    path: "/coins",
    element: (
      <div className="App h-screen bg-gray-10">
        <Header></Header>
        <AvailableCoinsView></AvailableCoinsView>
        <ToastContainer></ToastContainer>
      </div>
    ),
  },
  {
    path: "/:coinId",
    element: (
      <div className="App h-screen bg-gray-10">
        <Header></Header>
        <CoinView></CoinView>
        <ToastContainer></ToastContainer>
      </div>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
