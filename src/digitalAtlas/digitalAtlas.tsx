import * as React from "react";

import digitalAtlasStyle = require("xstyle/css!./styles/digitalAtlas.css")
import Map = require("esri/map");
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");

export interface DigitalAtlasProps { }

export class DigitalAtlas extends React.Component<DigitalAtlasProps, {}> {
  static digitalAtlasStyle = digitalAtlasStyle;
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
      <div className="panel-container">
        <div className="panel-side">
          <h2>此处添加标题</h2>
          <ul id="nyc_graphics">
            <li data-id="0" className="panel-result">FeatutreLayer0</li>
            <li data-id="1" className="panel-result">FeatutreLayer1</li>
            <li data-id="2" className="panel-result">FeatutreLayer2</li>
            <li data-id="3" className="panel-result">FeatutreLayer3</li>
            <li data-id="4" className="panel-result">FeatutreLayer4</li>
            <li data-id="5" className="panel-result">FeatutreLayer5</li>
            <li data-id="6" className="panel-result">FeatutreLayer6</li>
            <li data-id="7" className="panel-result">FeatutreLayer7</li>
            <li data-id="8" className="panel-result">FeatutreLayer8</li>
            <li data-id="9" className="panel-result">FeatutreLayer9</li>
            <li data-id="0" className="panel-result">FeatutreLayer0</li>
            <li data-id="1" className="panel-result">FeatutreLayer1</li>
            <li data-id="2" className="panel-result">FeatutreLayer2</li>
            <li data-id="3" className="panel-result">FeatutreLayer3</li>
            <li data-id="4" className="panel-result">FeatutreLayer4</li>
            <li data-id="5" className="panel-result">FeatutreLayer5</li>
            <li data-id="6" className="panel-result">FeatutreLayer6</li>
            <li data-id="7" className="panel-result">FeatutreLayer7</li>
            <li data-id="8" className="panel-result">FeatutreLayer8</li>
            <li data-id="9" className="panel-result">FeatutreLayer9</li>
          </ul>
        </div>
        <div id="mapView"/>
      </div>
    );
  }
}