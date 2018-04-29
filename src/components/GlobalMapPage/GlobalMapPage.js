/**
 * This component render GlobalMapPage (/global Route).
 */

import React, { Component } from "react";

import Map from "../SvgMap/SvgMap";

import marsMapFlatDay_background from "../../images/marsMapFlatDay_background.jpg";
import marsMapFlatNight_background from "../../images/marsMapFlatNight_background.jpg";
import marsMapFlatTerrain_background from "../../images/marsMapFlatTerrain_background.jpg";
import "./GlobalMapPage.css";

class GlobalMapPage extends Component {
  render() {
    // Data about map like backgroundMapImages and dimentions of map.
    const mapDetails = {
      backgroundUrl: [
        marsMapFlatDay_background,
        marsMapFlatNight_background,
        marsMapFlatTerrain_background
      ],
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
        cx: 157,
        cy: 281,
        title: "Olympus Mons",
        subtitle: "15",
        name: "16",
        diameter: "17",
        latitude: "18",
        longtitude: "19",
        origin: "20",
        ethnicity: "21"
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
        cx: 224,
        cy: 353,
        title: "Tharsis Volcanic Region",
        subtitle: "22",
        name: "23",
        diameter: "24",
        latitude: "25",
        longtitude: "26",
        origin: "27",
        ethnicity: "28"
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
        cx: 905,
        cy: 325,
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
        cx: 964,
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
        cx: 1132,
        cy: 250,
        title: "Elusium Volcanic",
        subtitle: "57",
        name: "58",
        diameter: "59",
        latitude: "60",
        longtitude: "61",
        origin: "62",
        ethnicity: "63"
      },
      {
        id: "",
        cx: 1099,
        cy: 454,
        title: "Terra Cimmeria",
        subtitle: "64",
        name: "65",
        diameter: "66",
        latitude: "67",
        longtitude: "68",
        origin: "69",
        ethnicity: "70"
      },
      {
        id: "",
        cx: 1097,
        cy: 564,
        title: "Chronium Planum",
        subtitle: "71",
        name: "72",
        diameter: "73",
        latitude: "74",
        longtitude: "75",
        origin: "76",
        ethnicity: "77"
      },
      {
        id: "",
        cx: 771,
        cy: 20,
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
