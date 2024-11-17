import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer"
import Main from "./pages/Main";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Test from "./pages/Test";
import SitemapRoute from './pages/SitemapRoute';
import { HelmetProvider } from 'react-helmet-async';
import WebsiteSchema from "./pages/WebsiteSchema";
function Sitemap() {
  return (
    <Route path="/" element={<SitemapRoute/>} />
  );
}

function App() {
  return (
    <HelmetProvider>
      <section className="App" id="App" onScroll={onscroll}>
        <WebsiteSchema/>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Header />} > */}
          <Route path="/" element={<Main />} />
          <Route path="/Experience" element={<Experience/>}/>
          <Route path="Education" element={<Education />} />
          <Route path="Projects" element={<Project />} />
          <Route path="Skills" element={<Main/>} />
          <Route path="Testing" element={<Test/>}/>
          <Route path="/sitemap.xml" element={<Sitemap/>} />
          {/* </Route> */}
        </Routes>
        <Footer/>
      </section>
    </HelmetProvider>
  );
}

export default App;
