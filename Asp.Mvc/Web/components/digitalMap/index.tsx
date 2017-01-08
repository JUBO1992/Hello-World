import "./styles/digitalMap.less";

import * as React from "react";
import {SidePanel} from "./sidePanel"
import { Map } from "../map";

export interface DigitalMapProps {
}
export interface DigitalMapState {
}
export class DigitalMap extends React.Component<DigitalMapProps, DigitalMapState>{
  constructor() {
    super();
  }
  refs: {
    [key: string]: any;
  }

  render() {
    return (
      <div className="digitalMap">
        This is DigitalMap!
        <div className="digitalMapLeft">
          <SidePanel ref="sidePanel" />
        </div>
        <div className="digitalMapRight">
          {/* */}
          {<Map ref="map"></Map>}
        </div>
      </div>
    );
  }

}