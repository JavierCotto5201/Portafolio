import React from "react";
import Navbar from "./navbar";
import Item1 from "./item1";
import Item2 from "./item2";
import Item3 from "./item3";
import Item4 from "./item4";
import Item5 from "./item5";
import Item6 from "./item6";
import Item7 from "./item7";
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
            <Item2></Item2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Item3></Item3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Item4></Item4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Item5></Item5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Item6></Item6>
          </div>
          <div className="col">
            <Item7></Item7>
          </div>
        </div>
      </div>
    )
  }
}
export default StartApp;