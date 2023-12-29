// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/feature/nav/Nav";
import Shared from "./pages/Shared/Shared";
import UserInfo from "./components/ui/userInfo/userInfo";
import Footer from "./components/feature/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Nav />
    <UserInfo />
    <Shared />
    <Footer />
  </>
);
