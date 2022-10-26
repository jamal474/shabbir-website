import React from "react";
import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Education from "./component/Education";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Contacts from "./component/Contacts";

function App() {
  return (
    <div className="App" id = "App" onScroll={onscroll}>
      <Header />
      <div id="Other">
        <Main />
        <Education />
        <Project />
        <Skills />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
