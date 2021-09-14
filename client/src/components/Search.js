import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ""};
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    this.props.updateSearch(value)
  }

  render() {

    return (
      <div className="search-main">
          <input name="search" value={this.state.search} onChange={ e => this.handleChange(e)} placeholder="Search by City" className="alert alert-primary"></input>
    </div>
    );
  }
}

export default Search;
