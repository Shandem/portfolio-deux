import React from "react";
import Navbar from "./NavBar/navBar.js";
import Footer from "./Footer/Footer";
import Mixellance from "./Projects/LiveProjects/mixellance";
import Moms from "./Projects/LiveProjects/Moms";
import Showcase from "./Showcase/Showcase.js";
import Skills from "./Skills/Skills.js";
import WrapUp from "./Conclusion/wrapUp.js";
import AboutMe from "./AboutMe/aboutMe.js";

import "./App.scss";
import { Section } from "lucide-react";

const items = [<Mixellance />, <Moms />, "Card 3", "Card 4", "Card 5"];

function App() {
  return (
    <div className="App">
      <Navbar />

      <div id="home">
        <t1 className="tittle">Joshuah J Buan-Gutierrez</t1>
        <t2> Web Dev Gaymer Nuro-divergent Human</t2>
        <p className="intro">here is some stuff about me ya dig</p>
      </div>

      <hr />

      <div id="about">
        <AboutMe />
      </div>

      <div id="Skills">
        <Skills />
      </div>

      <hr />

      <div id="Porjects">
        <Showcase />
      </div>

      <hr />

      <div id="contact">
        <WrapUp />
      </div>
    </div>
  );
}

export default App;
