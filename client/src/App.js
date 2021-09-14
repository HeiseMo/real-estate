import './App.css';
import './bootstrap4-pleasant.css'
import React, { Component } from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }


  render() {
    return (
      <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <div className="content-area">
        <Home/>
      </div>
    </div>
    );
  }
}

export default App;
