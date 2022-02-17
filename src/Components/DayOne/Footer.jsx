import React, { Component } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export class Footer extends Component {
  render() {
    return (
      <div className="text-white mt-5 p-5 bg-dark">
        <div className="row ">
          <div className="col-4">
            <h2>Get Touch</h2>
            <a href="https://www.google.com" style={{ textDecoration: "none" }}>
              <AiOutlineMail /> arwaashraf909
            </a>
            <br></br>
            <a href="" style={{ textDecoration: "none" }}>
              <BsTelephoneOutbound /> Phone
            </a>
          </div>
          <div className="col-4 text-center">
            <button className="btn btn-light px-5 my-5">Contact Me</button>
          </div>
          <div className="col-4 my-4">
            <a href="https://www.google.com" style={{ textDecoration: "none" }}>
              <AiOutlineFacebook /> FaceBook
            </a>
            <br></br>
            <a href="https://www.google.com" style={{ textDecoration: "none" }}>
              <BsInstagram /> Instagram
            </a>
            <br></br>
            <a href="https://www.google.com" style={{ textDecoration: "none" }}>
              <FiTwitter /> Twitter
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
