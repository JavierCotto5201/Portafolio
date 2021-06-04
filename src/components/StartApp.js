import React from "react";
import Navbar from "./navbar";
import Item1 from "./item1";
import bootstrap from 'bootstrap';

class StartApp extends React.Component {
  render() {
    return (
      <div id="App">
        <div className="row">
          <div className="col">
            <Navbar></Navbar>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Item1></Item1>
          </div>
        </div>
        <div className="row">
          <div className="col">

          </div>
        </div>
        <div className="row">
          <div className="col">

          </div>
        </div>
        <div className="row">
          <div className="col">

          </div>
        </div>
        <div className="row">
          <div className="col">

          </div>
        </div>
      </div>
    )
  }
}
export default StartApp;