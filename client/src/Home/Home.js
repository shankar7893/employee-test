import React, { Component } from "react";
import Nabar from "../common/Navbar";
import Footer from "../common/Footer";
import Container from "../common/Container";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Nabar />
        <Container />
        <Footer />
      </div>
    );
  }
}
