import React, { Component } from "react";

export class Bio extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-4">
            <h3
              className="text-light"
              style={{ fontSize: 44, textShadow: "2px 2px grey" }}
            >
              About Me
            </h3>
          </div>
          <div className="col-8 text-light">
            <p style={{ fontSize: 22, fontStyle: "italic" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              accusamus eum sunt dolores debitis exercitationem quo ipsam neque
              mollitia? Sequi id eaque minima deleniti omnis quae magni ratione
              nihil architecto.
            </p>
            <a
              className="btn btn-sm btn-secondary "
              download
              href="./hero.jpeg"
            >
              Download Reausme
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
