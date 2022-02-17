import React, { Component } from "react";
import Card from "../shared/Card";

export class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-light text-center" style={{fontSize:44}}>Portfolio</h2>
        <div className="row row-cols-3 g-3">
          {this.props.portfolio.map((project, index) => {
            return (
              <div className="col" key={index} style={{boxShadow:'2px 2px grey'}}>
                <Card><h2>{project}</h2></Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;
