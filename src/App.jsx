import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div>
       <Navbar fixed="top" /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
