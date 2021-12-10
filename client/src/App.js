import React from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/nav-component";
import HomeComponent from "./components/home-component";
import ResumeComponent from "./components/resume-component";
import WorksComponent from "./components/works-component";
import ContactComponent from "./components/contact-component";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/resume" element={<ResumeComponent />} />
        <Route path="/works" element={<WorksComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </div>
  );
}

export default App;
