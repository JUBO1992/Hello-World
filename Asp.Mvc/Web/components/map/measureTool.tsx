import "./styles/measureTool.less";
import * as React from "react";

import dom = require("dojo/dom");
import esriMap = require("esri/map");
import Units = require("esri/units");
import measurement = require("esri/dijit/Measurement");
import {Panel} from "react-bootstrap";

export class MeasureTool extends React.Component<{}, {}>{

  measurement: measurement;
  public setEsriMap(map: esriMap) {
    this.measurement = new measurement({
      map: map,
      defaultAreaUnit: Units.SQUARE_KILOMETERS,
      defaultLengthUnit: Units.KILOMETERS
    }, this.refs.measurementDiv);
    this.measurement.startup();
  }

  public clearResult() {
    this.measurement.clearResult();
  }
  public destory() {
    this.measurement.destroy();
  }
  refs: {
    [key: string]: any;
    measurementDiv: HTMLDivElement;
  }
  render() {
    return (
      <div className="measurementDiv">
        <Panel>
          <div ref="measurementDiv"></div>
          <span style={{ fontsize: "smaller", padding: "5px 5px" }}>This is description content.</span>
        </Panel>
      </div>
    );
  }
}