import "./styles/sidePanel.less";

import * as React from "react";
// import {Map} from "../map"
import {CardList} from "./cardList";

export interface SidePanelProps {
}
export interface SidePanelStates {
}
export class SidePanel extends React.Component<SidePanelProps, SidePanelStates> {

  // _map: Map;
  constructor(props: SidePanelProps, states: SidePanelStates) {
    super(props, states);
  }

  componentWillMount() {
  }

  // public setMap(map: Map) {
  //   this._map = map;
  // }

  refs: {
    [key: string]: any;
  }

  render() {
    // let map = this._map;
    let self = this;
    let data =
      [{ name: '陈爱平', id: '1234567890' },
      { name: '陈爱平', id: '1234567891' },
      { name: '陈爱平', id: '1234567892' },
      { name: '陈爱平', id: '1234567893' },
      { name: '陈爱平', id: '1234567894' },
      { name: '陈爱平', id: '1234567895' },
      { name: '陈爱平', id: '1234567896' },
      { name: '陈爱平', id: '1234567897' },
      { name: '陈爱平', id: '1234567898' },
      { name: '陈爱平', id: '1234567899' },
      { name: '陈爱平', id: '1234567810' },
      { name: '陈爱平', id: '1234567811' }
      ];
    return (
      <div>This is sidepanel.
        <CardList header='土地承包方信息列表' data={data} idField='id' pageSize={7}/>
      </div>
    );
  }
}