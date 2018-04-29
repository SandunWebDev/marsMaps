/**
 * This component render NorthPoleMap Page. (/north Route)
 */

import React, { Component } from "react";

import Map from "../SvgMap/SvgMap";
import marsMapNorthPoleDay_background from "../../images/marsMapNorthPoleDay_background.jpg";

import "./NorthPoleMapPage.css";

class NorthPoleMapPage extends Component {
  render() {
     // Data about map like backgroundMapImages and dimentions of map.
    const mapDetails = {
      backgroundUrl: [marsMapNorthPoleDay_background, undefined, undefined],
      width: 1364,
      height: 686
    };

    // Array of each mapPoints
    const mapPoints = [
      {
        id: "",
        cx: 562,
        cy: 150,
        title: "Acidalia Planitia",
        subtitle: "1",
        name: "2",
        diameter: "3",
        latitude: "4",
        longtitude: "5",
        origin: "6",
        ethnicity: "7"
      },
      {
        id: "",
        cx: 383,
        cy: 192,
        title: "Tempe Terra",
        subtitle: "8",
        name: "9",
        diameter: "10",
        latitude: "11",
        longtitude: "12",
        origin: "13",
        ethnicity: "14"
      },

      {
        id: "",
        cx: 429,
        cy: 289,
        title: "Lunae Planum",
        subtitle: "29",
        name: "30",
        diameter: "31",
        latitude: "32",
        longtitude: "33",
        origin: "34",
        ethnicity: "35"
      },

      {
        id: "",
        cx: 605,
        cy: 340,
        title: "Meridiani Planum",
        subtitle: "36",
        name: "37",
        diameter: "38",
        latitude: "39",
        longtitude: "40",
        origin: "41",
        ethnicity: "42"
      },
      {
        id: "",
        cx: 805,
        cy: 425,
        title: "Terra Sabaea",
        subtitle: "43",
        name: "44",
        diameter: "45",
        latitude: "46",
        longtitude: "47",
        origin: "48",
        ethnicity: "49"
      },
      {
        id: "",
        cx: 794,
        cy: 285,
        title: "Isidis Plantia",
        subtitle: "50",
        name: "51",
        diameter: "52",
        latitude: "53",
        longtitude: "54",
        origin: "55",
        ethnicity: "56"
      },

      {
        id: "",
        cx: 571,
        cy: 40,
        title: "Vastitas Borealis",
        subtitle: "78",
        name: "79",
        diameter: "80",
        latitude: "81",
        longtitude: "82",
        origin: "83",
        ethnicity: "84"
      },
      {
        id: "",
        cx: 638,
        cy: 535,
        title: "Noachis Terra",
        subtitle: "85",
        name: "86",
        diameter: "87",
        latitude: "88",
        longtitude: "89",
        origin: "90",
        ethnicity: "91"
      }
    ];

    return (
      <div className="NorthPoleMapPage">
        <div className="NorthPoleMapPage__map">
          <div>
            <Map mapDetails={mapDetails} mapPoints={mapPoints} />
          </div>
        </div>
      </div>
    );
  }
}

export default NorthPoleMapPage;
