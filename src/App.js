import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Menu from "./pages/menu/Menu";
import Reservation from "./pages/reservation/Reservation";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import BeforFooter from "./components/BeforeFooter";
import Footer from "./components/Footer";
import AfterFooter from "./components/AfterFooter";
import UpBtn from "./components/UpBtn";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <UpBtn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <BeforFooter />
        <Footer />
        <AfterFooter />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
