import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

import "./InfoPage.css";

class InfoPage extends Component {
  render() {
    return (
      <div className="InfoPage">
        <iframe src="https://en.wikipedia.org/wiki/Mars" />
      </div>
    );
  }
}

export default InfoPage;
