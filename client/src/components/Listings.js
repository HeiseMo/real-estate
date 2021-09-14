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
      let filteredProperties = myProperties.filter(
          (property) => {
            if(search || location){
              return property.location.toLowerCase().indexOf((search || location).toLowerCase()) !== -1;
            }
            else if(propertyType){
              return property.type.toLowerCase().indexOf((propertyType).toLowerCase()) !== -1;
            }
            return property;
          }
      );  
        
    return (
        <div className="listings-container">
      <div className="listings-main">
          {filteredProperties.map((property, index) =>{
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
