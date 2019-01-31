import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz </h1>
        <p> Select the book written by the author shown </p>
      </div>
    </div>
  );
}

function Turn() {
  return (<div/>)
}
function Continue() {
  return (<div/>)
}

function Footer() {
  return (<div/>)
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div classname="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default AuthorQuiz;
