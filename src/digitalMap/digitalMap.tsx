import * as React from "react";

import {TopNav} from "../common/topNav";

import Map = require("esri/map");
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");

import digitalMapStyle = require("xstyle/css!./styles/digitalMap.css");

export interface DigitalMapProps { }

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

  refs: {
    [key: string]: any;
    mapView: HTMLDivElement;
  }

  render() {
    return (
      <div className="digitalMap">
        <div className="digitalMapTop">
          <TopNav/>
        </div>
        <div className="digitalMapMid">
          <div className="digitalMapMidLeft">
          </div>
          <div className="digitalMapMidRight">
            <div id="mapView"/>
          </div>
        </div>
      </div>
    );
  }
}