import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div class="main-info">
            <div className="main-info-title">Office Information</div>
            <div className="main-info-body">
            <div className="main-info-body-info">Mon-Sat, 9.30AM-7PM</div>
            <div className="main-info-body-phonenumber"><span>8379 Cedar St.Encino, 91316</span><span>0000 (123) 456-78-99</span></div>
            </div>
            <div className="main-info-body-footer">© 2021 mywebsite.com
            </div>
        </div>
      </>
    );
  }
}

export default Info;
