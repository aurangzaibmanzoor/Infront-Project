import React, { Component } from "react";
import Form from "./Components/Aside/form";
import CenterText from "./Components/Aside/centerText";
import Bottom from "./Components/Aside/bottom";
class Aside extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="asideContent">
          <Form />
          <CenterText />
          <Bottom />
        </div>
      </React.Fragment>
    );
  }
}

export default Aside;
