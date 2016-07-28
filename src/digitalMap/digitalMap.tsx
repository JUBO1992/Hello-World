import * as React from "react";

import digitalMapStyle = require("xstyle/css!./styles/digitalMap.css");
import Map = require("esri/map");
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");

export interface DigitalMapProps {}

export class DigitalMap extends React.Component<DigitalMapProps, {}> {
  static digitalMapStyle = digitalMapStyle;
  map: Map;
  mylayer: ArcGISDynamicMapServiceLayer;
  constructor() {
    super();
  }
  componentDidMount() {
    this.createMap();
  }

  private createMap() {
    this.mylayer = new ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer");
    this.map = new Map("mapView");
    this.map.addLayer(this.mylayer);
  }

  render() {
    return (
      <div>
      <div id="mapView" style={{ height: 600,width: "100%",backgroundColor: "blue"}}/>
      </div>
    );
  }
}