import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import NavChildren from "./NavChildren"
import logo from "../logo2.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, option: ""};
  }
  languageIcons = ["https://image.flaticon.com/icons/png/32/3014/3014006.png", "https://image.flaticon.com/icons/png/32/3013/3013972.png"]
  menuIcons = ["https://image.flaticon.com/icons/png/32/5335/5335972.png", "https://image.flaticon.com/icons/png/32/5336/5336655.png", "https://image.flaticon.com/icons/png/32/5363/5363052.png", "https://image.flaticon.com/icons/png/32/5336/5336779.png", "https://image.flaticon.com/icons/png/32/2274/2274821.png"]
  

  setOpen = (x) => {
    if(this.state.open === false){
        this.setState({open: true, option: x});
    } else {
        this.setState({open: false, option: ""});
    }
  }

  render() {

    return (
      <nav className="navbar-main">
        <div>
          <img className="logo-svg" src={logo} alt="React Logo" />
        </div>
          <ul className="navbar-main-nav">
              <li className="nav-item">
                  <a href="#" className="icon-button" onClick={() => this.setOpen("languages")}>
                      <img src="https://image.flaticon.com/icons/png/24/3898/3898082.png" alt="langauges"/>
                  </a>
                  {this.state.open && this.state.option === "languages" && <NavChildren selected="languages" icons={this.languageIcons} options={["Turkish", "English"]}/>}
              </li>
              <li className="nav-item">
                  <a href="#" className="icon-button" onClick={() => this.setOpen("menu")}>
                  <img src="https://image.flaticon.com/icons/png/24/1573/1573995.png" alt="menu"/>
                  </a>
                  {this.state.open && this.state.option === "menu" && <NavChildren selected="menu" icons={this.menuIcons} options={["Management", "Selling", "Fees", "About Us", "Contact Us"]}/>}
              </li>
          </ul>
    </nav>
    );
  }
}

export default Navbar;
