import React from "react";
import "./App.css";
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import Header from "./component/Header";
import Main from "./component/Main";
import Education from "./component/Education";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Contacts from "./component/Contacts";

function App() {
  const location = useLocation();
  console.log('pathname', location);
  return (
    <section className="App" id = "App" onScroll={onscroll}>
      <Header />
      <div id="Other">
        <Main />
        <Education />
        <Project />
        <Skills />
        <Contacts />
      </div>
    </section>
  );
}

export default App;
