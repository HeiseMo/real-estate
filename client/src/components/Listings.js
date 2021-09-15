import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Card from "./Card";


class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      let myProperties = this.props.properties;
      let search = this.props.search;
      let location = this.props.location;
      let propertyType = this.props.propertyType;

      const filter = myProperties.filter(
        (item) =>
          ( location === "All" || item.location.toLowerCase().indexOf((location).toLowerCase()) !== -1) &&
          (propertyType === "All" ||item.type === propertyType)
      );
console.log(filter)
      let filteredProperties = myProperties.filter(
          (property) => {
              return property.location.toLowerCase().indexOf((search || location).toLowerCase()) !== -1;
            }
      ); 
      console.log(filteredProperties) 
        
    return (
        <div className="listings-container">
      <div className="listings-main">
          {filter.map((property, index) =>{
              return(
                <Card propId={property.propid} livingroom={property.livingroom} bedroom={property.bed} bathroom={property.shower} location={property.location} /> 
              )
          })}
          </div>
      </div>
    );
  }
}

export default Listings;
