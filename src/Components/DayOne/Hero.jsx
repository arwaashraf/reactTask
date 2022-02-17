import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
      <>
        <div className="card bg-dark text-white">
          <img
            src={process.env.PUBLIC_URL + "/3.jpg"}
            className="card-img"
            style={{ height: "550px", objectFit: "cover" }}
          />
          <div className="card-img-overlay position-absolute top-50 bottom-50">
            <h3
              className="card-title text-dark"
              style={{ fontSize: 55, fontFamily: "bold" }}
            >
              {this.props.name}
            </h3>
            <p className="card-text text-dark" style={{ fontSize: 25 }}>
              {this.props.job}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
