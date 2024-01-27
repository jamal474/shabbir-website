import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import SitemapRoute from './pages/SitemapRoute';
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
