import React from "react";
import "./App.css";
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Education from "./component/Education";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Contacts from "./component/Contacts";
import SitemapRoute from './component/SitemapRoute';
import { HelmetProvider } from 'react-helmet-async';

function Sitemap() {
  return (
    <Route path="/" element={<SitemapRoute/>} />
  );
}

function App() {
  return (
    <HelmetProvider>
      <section className="App" id="App" onScroll={onscroll}>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Header />} > */}
          <Route path="/" element={<Main />} />
          <Route path="Education" element={<Education />} />
          <Route path="Projects" element={<Project />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Contact" element={<Contacts />} />
          <Route path="/sitemap.xml" element={<Sitemap/>} />
          {/* </Route> */}
        </Routes>
      </section>
    </HelmetProvider>
  );
}

export default App;
