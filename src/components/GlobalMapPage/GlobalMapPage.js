/**
 * This component render GlobalMapPage (/global Route).
 */

import React, { Component } from "react";

import Map from "../SvgMap/SvgMap";

import globalMapPoints from "../../mapData/global.json";
import marsMapFlatDay_background from "../../images/marsMapFlatDay_background.jpg";
import marsMapFlatNight_background from "../../images/marsMapFlatNight_background.jpg";
import marsMapFlatTerrain_background from "../../images/marsMapFlatTerrain_background.jpg";
import "./GlobalMapPage.css";

class GlobalMapPage extends Component {
  render() {
    // Data about map like backgroundMapImages and dimentions of map.
    const mapDetails = {
      backgroundUrl: [marsMapFlatDay_background, marsMapFlatNight_background, marsMapFlatTerrain_background],
      width: 1364,
      height: 686
    };

    // Array of each mapPoints
    const mapPoints = globalMapPoints.mapPoints;

    return (
      <div className="GlobalMapPage">
        <div className="GlobalMapPage__map">
          <div>
            <Map mapDetails={mapDetails} mapPoints={mapPoints} />
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalMapPage;
