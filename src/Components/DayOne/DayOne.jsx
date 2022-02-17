import React, { Component } from "react";
import Bio from "./Bio";
import Footer from "./Footer";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

export class DayOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "Arwa Ashraf",
      job: "Web Developer and Designer",
      skills: [
        { name: "HTML", rate: 90 },
        { name: "CSS", rate: 80 },
        { name: "JAVASCRIPT", rate: 70 },
        { name: "SAAS", rate: 60 },
        { name: "ANGULAR", rate: 50 },
        { name: "REACT", rate: 30 },
        { name: "BOOTSTRAP", rate: 40 },
      ],
      portfolio: [
        "Web Design",
        "Mobile Design",
        "Logo Design",
        "Web Application",
        "Development",
        "PWA Development",
      ],
    };
  }
  render() {
    return (
      <>
        <Hero name={this.state.name} job={this.state.job} />
        <Bio />

        <Skills skills={this.state.skills} />
        <Portfolio portfolio={this.state.portfolio} />
        <Footer />
      </>
    );
  }
}

export default DayOne;
