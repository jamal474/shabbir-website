import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Education from "./component/Education";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Contacts from "./component/Contacts";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  
  return (
    <HelmetProvider>
    <section className="App" id = "App" onScroll={onscroll}>
      <Header/>
        <Routes>
          {/* <Route path="/" element={<Header />} > */}
            <Route path="/" element={<Main />} />
            <Route path="Education" element={<Education />} />
            <Route path="Projects" element={<Project />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Contact" element={<Contacts />} />
          {/* </Route> */}
        </Routes>
    </section>
    </HelmetProvider>
  );
}

export default App;
