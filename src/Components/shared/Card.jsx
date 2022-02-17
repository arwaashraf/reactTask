import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className="card p-3 bg-success text-white text-center">
        {this.props.children}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vitae
          corporis, suscipit vero reprehenderit minima obcaecati explicabo ut
          sint consectetur. Ea id quas a cum dignissimos voluptates tempora?
          Modi, facere?
        </p>
      </div>
    );
  }
}

export default Card;
