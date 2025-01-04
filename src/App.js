import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Programs from "./Components/page/Programs";
import Home from "./Components/page/Home";
import About from "./Components/page/About";
import Contact from "./Components/page/Resources";
import Resources from "./Components/page/Contact"; // Ensure this exists.


const App = () => {
  return (
    <Router>
      {/* <NavigationBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs/*" element={<Programs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
