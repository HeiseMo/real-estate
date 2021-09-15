import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      propertyType: "",
      status: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.props.updateSearch(name, value);
  };

  render() {
    let myProperties = this.props.properties;
    let uniqueLocation = myProperties
      .map((item) => item.location)
      .filter((value, index, self) => self.indexOf(value) === index);
    let uniquePropertyType = myProperties
      .map((item) => item.type)
      .filter((value, index, self) => self.indexOf(value) === index);
      let uniqueStatus = myProperties
      .map((item) => item.status)
      .filter((value, index, self) => self.indexOf(value) === index);

    return (
      <>
      <div class="main-filter">
  <div class="">
  <div className="filters">
          <label for="location" className="label">
            Location
          </label>
          <select
            value={this.state.location}
            onChange={(e) => this.handleChange(e)}
            id="location"
            name="location"
            className="main-dropdown"
          >
            <option value="All">
              All
            </option>
            {uniqueLocation.map((location, index) => {
              return <option value={location}>{location}</option>;
            })}
          </select>
        </div>

        <div className="filters">
          <label for="propertyType" className="label">
            Property Type
          </label>
          <select
            value={this.state.propertyType}
            onChange={(e) => this.handleChange(e)}
            id="propertyType"
            name="propertyType"
            className="main-dropdown"
          >
            <option selected value="All">
              All
            </option>
            {uniquePropertyType.map((location, index) => {
              return <option value={location}>{location}</option>;
            })}
          </select>
        </div>
        <div className="filters">
          <label for="Status" className="label">
            Status
          </label>
          <select
            value={this.state.status}
            onChange={(e) => this.handleChange(e)}
            id="status"
            name="status"
            className="main-dropdown"
          >
            <option selected value="All">
              All
            </option>
            {uniqueStatus.map((status, index) => {
              return <option value={status}>{status}</option>;
            })}
          </select>
        </div>
  </div>
</div>

        
      </>
    );
  }
}

export default Filter;
