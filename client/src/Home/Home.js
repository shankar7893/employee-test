import React, { Component } from "react";
import Nabar from "../common/Navbar";
import Footer from "../common/Footer";
import Container from "../common/Container";
import Card from "../common/Card";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Nabar />
        <Card />
        <Footer />
      </div>
    );
  }
}
