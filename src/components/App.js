/**
 * This is the main component of this app. It render main menu and contents according to slected tab.
 */

import { Menu, Input, Icon, Dropdown } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";
import React, { Component } from "react";

import MainPage from "./MainPage/MainPage";
import InfoPage from "./InfoPage/InfoPage";
import GalleryPage from "./GalleryPage/GalleryPage";
import GlobalMapPage from "./GlobalMapPage/GlobalMapPage";
import NorthPoleMapPage from "./NorthPoleMapPage/NorthPoleMapPage";
import SouthPoleMapPage from "./SouthPoleMapPage/SouthPoleMapPage";

import "./App.css";
import marsLogo from "../images/marsLogo.png";

class App extends Component {
  // App Component's State
  state = {
    activeItem: "home" // Pre setting home as default selected tab.
  };

  // Change state when menu tab is clicked.
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="App">
        {/* Main Menu. Note that in here "as" and "to" props are used to render menu item as Link component.*/}
        <Menu size="huge" inverted className="App__menu">
          <Menu.Item as={Link} to="/" name="home" onClick={this.handleItemClick}>
            <img src={marsLogo} alt="Mars Maps" />
            <h2>Mars Maps</h2>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/"
            color="blue"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/global"
            color="blue"
            name="global"
            active={activeItem === "global"}
            onClick={this.handleItemClick}
          >
            <Icon name="globe" />
            Global
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/northpole"
            color="blue"
            name="northPole"
            active={activeItem === "northPole"}
            onClick={this.handleItemClick}
          >
            <Icon name="lightning" />
            North Pole
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/southpole"
            color="blue"
            name="southPole"
            active={activeItem === "southPole"}
            onClick={this.handleItemClick}
          >
            <Icon name="magnet" />
            South Pole
          </Menu.Item>
          <Dropdown item text="Other" name="other" onClick={this.handleItemClick}>
            {/* Sub Menu */}
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/info" icon="info" text="Info" />
              <Dropdown.Item as={Link} to="/gallery" icon="photo" text="Gallery" />
              <Dropdown.Item as={Link} to="/videos" icon="video camera" text="Videos" />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input className="icon" icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Route exact path="/" component={MainPage} />
        <Route exact path="/global" component={GlobalMapPage} />
        <Route exact path="/northpole" component={NorthPoleMapPage} />
        <Route exact path="/southpole" component={SouthPoleMapPage} />
        <Route exact path="/info" component={InfoPage} />
        <Route exact path="/gallery" component={GalleryPage} />
      </div>
    );
  }
}

export default App;
