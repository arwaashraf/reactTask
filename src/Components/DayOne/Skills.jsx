import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-light" style={{fontSize:44}}>Skills</h2>
            <p style={{fontSize:18}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              libero sunt hic deleniti, maxime voluptatum nam incidunt ipsa enim
              maiores distinctio consequatur possimus quis earum. Quae tempore
              quia id ex.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <ul>
              {this.props.skills.map((skill, index) => {
                return <li key={index}>{skill.name}</li>;
              })}
            </ul>
          </div>
          <div className="col-7">
            {this.props.skills.map((skill, index) => {
              return(
              <div className="progress my-2" key={index}>
                  <div
                  className="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: skill.rate + '%' }}
                  aria-valuenow={skill.rate}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
