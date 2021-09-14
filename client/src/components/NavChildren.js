import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

class NavChild extends Component {
  constructor(props) {
    super(props);
  }


  render() {
      if (this.props.selected === "languages"){
        return (
            <div className="dropdown-main">
                <a href="#" className="menu-item" >
                    <img className="menu-icon" src={this.props.icons[0]} alt="flag"/>
                    {this.props.options[0]}
                </a>
                <a href="#" className="menu-item" >
                    <img className="menu-icon" src={this.props.icons[1]} alt="flag"/>
                    {this.props.options[1]}
                </a>
            </div>
        );
      } else if(this.props.selected === "menu") {
        return (
        <div className="dropdown-main">
        <a href="#" className="menu-item" >
            <img className="menu-icon" src={this.props.icons[0]} alt="flag"/>
            {this.props.options[0]}
        </a>
        <a href="#" className="menu-item" >
            <img className="menu-icon" src={this.props.icons[1]} alt="flag"/>
            {this.props.options[1]}
        </a>
        <a href="#" className="menu-item" >
            <img className="menu-icon" src={this.props.icons[2]} alt="flag"/>
            {this.props.options[2]}
        </a>
        <a href="#" className="menu-item" >
            <img className="menu-icon" src={this.props.icons[3]} alt="flag"/>
            {this.props.options[3]}
        </a>
        <a href="#" className="menu-item" >
            <img className="menu-icon" src={this.props.icons[4]} alt="flag"/>
            {this.props.options[4]}
        </a>
    </div>
        );
      }
  };
};

export default NavChild;
