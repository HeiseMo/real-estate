import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {location: ""};
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    this.props.updateSearch(name, value)
  }

  render() {

    return (
      <div className="search-main">
          <input name="location" value={this.state.location} onChange={ e => this.handleChange(e)} placeholder="Search by City" className="alert alert-secondary"></input>
    </div>
    );
  }
}

export default Search;
