import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import "./SvgMap.css";

function mapItem(props) {}

class SvgMap extends Component {
  state = {
    popup: {
      display: "none",
      position: "relative",
      top: 500,
      left: 0
    },
    selectedItem: {},
    backgroundUrl: this.props.mapDetails.backgroundUrl[0]
  };

  popupHide(e) {
    this.setState({
      popup: {
        display: "none"
      }
    });
  }

  popupToggle(e, item) {
    this.setState({
      popup: {
        display: "initial",
        position: "absolute",
        top: e.clientY + "px",
        left: e.clientX + "px"
      },
      selectedItem: item
    });
  }

  changeMapBackground(mapNo) {
    this.setState({
      backgroundUrl: this.props.mapDetails.backgroundUrl[mapNo]
    });
  }

  checkDisabled(mapNo) {
    console.log(mapNo, this.props.mapDetails.backgroundUrl);
    if (this.props.mapDetails.backgroundUrl[mapNo] === undefined) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    /** Getting mapDetails and mapPoints from recived props.
     *
     *  mapDetails must contain backgroundUrl and viewBox size.
     *  Both background image and viewBox dimensions should be same for best compatibility.
     *
     *  mapPoints must be a array of objects with following properties. (id, title, cx, cy)
     *  cx and cy dimention values should be compatible with viewBox dimentions.
     *
     *  (Simply use Illustrator to easily match dimentions)
     **/
    const { mapDetails, mapPoints } = this.props;
    const { selectedItem } = this.state;

    // Generating SVG elements for each mapPoint.
    const allMapPoints = mapPoints.map((item, id) => {
      return (
        <g
          id={item.id}
          key={id}
          onClick={(e) => {
            this.popupToggle(e, item);
          }}
        >
          <circle cx={item.cx} cy={item.cy} r="4" />
          <text fontSize="24" y={item.cy + 5} x={item.cx + 10} strokeWidth="0" stroke="#000" fill="#000000">
            {item.title}
          </text>
        </g>
      );
    });

    // Returning full svg map
    return (
      <div className="svgMap">
        <div className="svgMap__popup" style={this.state.popup}>
          <Card>
            <Card.Content>
              <Card.Header>{selectedItem.title}</Card.Header>
              <Card.Meta>{selectedItem.subtitle}</Card.Meta>
              <Card.Description>
                <p>Name : {selectedItem.name} </p>
                <p>Diameter : {selectedItem.diameter}</p>
                <p>Latitude : {selectedItem.latitude}</p>
                <p>Longtitude : {selectedItem.longtitude}</p>
                <p>Origin : {selectedItem.origin}</p>
                <p>Ethnicity: {selectedItem.ethnicity}</p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="green"
                  onClick={(e) => {
                    window.open("http://nasa.gov", "_blank");
                    this.popupHide(e);
                  }}
                >
                  More Info
                </Button>
                <Button
                  basic
                  color="red"
                  onClick={(e) => {
                    e.stopPropagation();
                    this.popupHide(e);
                  }}
                >
                  Close
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
        <svg
          viewBox={`0 0 ${mapDetails.width} ${mapDetails.height}`}
          style={{
            backgroundImage: `url(${this.state.backgroundUrl})`,
            backgroundPosition: "center",
            backgroundColor: "black",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            // backgroundSize: `${mapDetails.width}px ${mapDetails.height}px`,
            width: "100%"
          }}
          // onClick={(e) => {
          //   e.stopPropagation();
          //   if (this.state.popup.display === "initial") {
          //     this.popupHide(e);
          //   }
          // }}
        >
          <rect width="1364" height="686" fill="none" />
          {allMapPoints}
        </svg>
        <Button.Group style={{ display: "flex" }}>
          <Button
            color="blue"
            onClick={() => {
              this.changeMapBackground(0);
            }}
            disabled={this.checkDisabled(0)}
          >
            Day
          </Button>
          <Button.Or />
          <Button
            color="orange"
            onClick={() => {
              this.changeMapBackground(1);
            }}
            disabled={this.checkDisabled(1)}
          >
            Night
          </Button>
          <Button.Or />
          <Button
            color="green"
            onClick={() => {
              this.changeMapBackground(2);
            }}
            disabled={this.checkDisabled(2)}
          >
            Terrain
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default SvgMap;
