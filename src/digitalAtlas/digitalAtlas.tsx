/// <reference path="styles.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

import {TopNav} from "../common/topNav"
import {SidePanel} from "./sidePanel"
import { Map } from "../map/map";

import digitalAtlasStyle = require("xstyle/css!./styles/digitalAtlas.css");

export interface DigitalAtlasProps {
}
export interface DigitalAtlasState {
}

export class DigitalAtlas extends React.Component<DigitalAtlasProps, DigitalAtlasState> {
  /**
   * 电子图集
   */
  static digitalAtlasStyle = digitalAtlasStyle;
  _map: Map;
  constructor(props: DigitalAtlasProps, state: DigitalAtlasState) {
    super(props);
  }
  componentDidMount() {
    this._map = this.refs.map;
  }
  refs: {
    [key: string]: any;
    digitalAtlas: HTMLDivElement;
    map: Map;
    sidePanel: SidePanel;
  };
  render() {
    return (
      <div className="digitalAtlas" ref="digitalAtlas"> This is a test.
        <div className="digitalAtlasTop">
          <TopNav />
        </div>
        <div className="digitalAtlasMid">
          <div className="digitalAtlasMidleft">
            <SidePanel ref="sidePanel" />
          </div>
          <div className="digitalAtlasMidright">
            {/* */}
            <Map ref="map">
            </Map>
          </div>
        </div>
      </div>
    );
  }
}