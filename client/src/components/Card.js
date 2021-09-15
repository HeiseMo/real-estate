import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="card">
        <img
          class="card-img-top"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
          alt="Card image cap"
        />
        <div class="main-card-body">
          <h4 class="card-title badge badge-secondary property-id">
            Property ID: <span>{this.props.propId}</span>
          </h4>
          <div className="property-info">
            <span>Livingroom:</span>
            <span>{this.props.livingroom}</span>
            <span>Bedroom:</span>
            <span>{this.props.bedroom}</span>
            <span>Bathroom:</span>
            <span>{this.props.bathroom}</span>
          </div>

          <div className="property-location">
            <div>
              <img
                src="https://image.flaticon.com/icons/png/24/2928/2928883.png"
                alt="location"
              />
              <span>{this.props.location}</span>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/24/1019/1019607.png"
                alt="status"
              />
              <span>{this.props.status}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
