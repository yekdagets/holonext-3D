import React from "react";
// import { ThemeProvider } from "styled-components";
// import { theme } from "./theme";
import "./App.css";
// import { Grid, Typography, Stack } from "@mui/material";
// import Slider from "./components/Slider";
import HamburgerMenu from "./components/HamburgerMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";

import Portfolio from "./components/Pages/Portfolio";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";

export default function App() {
  return (
    <>
      <Router>
        <HamburgerMenu />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
