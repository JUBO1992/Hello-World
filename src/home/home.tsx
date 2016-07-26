import * as React from "react";

import Map = require("esri/map");
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");

export interface HomeProps { }

export class Home extends React.Component<HomeProps, {}> {
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
        <div id="mapView" style={{height:500,width:'100%',backgroundColor:'blue'}}/>
        <h1>This is Home!!!</h1>
        <h1>This is Home!!!</h1>
        <h1>This is Home!!!</h1>
        <h1>This is Home!!!</h1>
        <h1>This is Home!!!</h1>
        <h1>This is Home!!!</h1>
        <h1>This is Home!!!</h1>
      </div>
    );
  }
}