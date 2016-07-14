import * as React from "react";

import Map = require("esri/Map");
import MapView = require("esri/views/MapView");

export interface HomeProps {}

export class Home extends React.Component<HomeProps, {}> {
  render() {
      var map = new Map({
        basemap: "streets"
      });

      var view = new MapView({
        container: "mapView",
        map: map,
        zoom: 4,
        center: [15, 65]
      });
    return (
      <div>
      <div id="mapView" />
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