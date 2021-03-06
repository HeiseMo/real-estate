import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Listings from "./Listings";
import Search from "./Search";
import Properties from "../properties.json";
import Filter from "./Filter";
import Info from "./Info";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: Properties,
      search: "",
      location: "All",
      propertyType: "All",
      status: "All"
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="home">
        <div className="filter">
          <Filter updateSearch={this.updateSearch} properties={this.state.properties} />
          <Info />
        </div>
        <div className="listings">
          <Search updateSearch={this.updateSearch} />
          <Listings
            properties={this.state.properties}
            search={this.state.search}
            status ={this.state.status}
            location={this.state.location}
            propertyType={this.state.propertyType}
            min={this.state.min}
            max={this.state.max}
          />
        </div>
      </div>
    );
  }
}

export default Home;
