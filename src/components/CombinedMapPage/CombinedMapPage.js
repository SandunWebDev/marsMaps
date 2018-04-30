/**
 * This compoents is renderd initially. (/ Route)
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";

import GlobalMapPage from "../GlobalMapPage/GlobalMapPage";
import NorthPoleMapPage from "../NorthPoleMapPage/NorthPoleMapPage";
import SouthPoleMapPage from "../SouthPoleMapPage/SouthPoleMapPage";

import "./CombinedMapPage.css";

class CombinedMapPage extends Component {
  render() {
    return (
      <div className="CombinedMapPage">
        <div>
          <NorthPoleMapPage />
          <Link to="/northpole"><h2>North Pole</h2></Link>
        </div>
        <div>
          <GlobalMapPage />
          <Link to="/global"><h2>Center</h2></Link>
        </div>
        <div>
          <SouthPoleMapPage />
          <Link to="/southpole"><h2>South Pole</h2></Link>
        </div>
      </div>
    );
  }
}

export default CombinedMapPage;
