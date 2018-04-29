/**
 * This compoents is renderd initially. (/ Route)
 */

import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <Header as="h1" icon>
          <Icon name="globe" className="MainPage__header__icon"/>
          <p className="MainPage__header">Welcome To Mars Maps</p>
          <Header.Subheader className="MainPage__header__sub">
            Select A Map Type From Menu To Get Started
          </Header.Subheader>
        </Header>
      </div>
    );
  }
}

export default MainPage;
