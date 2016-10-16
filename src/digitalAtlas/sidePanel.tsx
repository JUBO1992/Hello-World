import * as React from "react";
import {Map} from "../map/map"

import sidePanelStyle = require("xstyle/css!./styles/sidePanel.css");

export interface SidePanelProps {
}
export interface SidePanelStates {
}
export class SidePanel extends React.Component<SidePanelProps, SidePanelStates> {

  static sidePanelStyle = sidePanelStyle;

  _map: Map;
  constructor(props: SidePanelProps, states: SidePanelStates) {
    super(props, states);
  }

  componentWillMount() {
  }

  public setMap(map: Map) {
    this._map = map;

  }
  refs: {
    [key: string]: any;
  }

  render() {
    let map = this._map;
    let self = this;
    return (
      <div>This is sidepanel.</div>
    );
  }
}