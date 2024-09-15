import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "././Components/Home/Home";
import About from "././Components/About/About";
import Menu from "././Components/Menu/Menu";
import Reservation from "./Components/Reservation/Reservation";
import ScrollToTop from "./Components/ScrollTop";

function App() {
  const menuNav = [
    {
      pageName: "Home",
      pageURL: "/",
    },
    {
      pageName: "About",
      pageURL: "about",
    },
    {
      pageName: "Reservation",
      pageURL: "reservation",
    },
    {
      pageName: "Menu",
      pageURL: "menus",
    },
  ];
  return (
    <>
      <Header menuNav={menuNav} />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home title="Little Lemon" />}></Route>
          <Route
            path="/about"
            element={<About title="Learn About Us!" />}
          ></Route>
          <Route
            path="/reservation"
            element={
              <Reservation
                title="Reserve a Table Now!"
                desc="Please fill out the form to enable the Reservation button"
              />
            }
          ></Route>
          <Route path="/menus" element={<Menu title="Our Menu" />}></Route>
        </Routes>
      </ScrollToTop>
      <Footer menuNav={menuNav} />
    </>
  );
}

export default App;
