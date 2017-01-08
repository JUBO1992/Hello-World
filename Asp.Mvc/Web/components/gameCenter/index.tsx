import "./styles/gameCenter.less";

import * as React from "react";
import {SidePanel} from "./sidePanel";

export interface GameCenterProps {
}
export interface GameCenterState {
}
export class GameCenter extends React.Component<GameCenterProps, GameCenterState>{
  constructor() {
    super();
  }
  private setGameIndex(index){
  }
  refs: {
    [key: string]: any;
  }

  render() {
    return (
      <div className="digitalAtlas">
        <div className="digitalAtlasLeft">
          <SidePanel ref="sidePanel" selectedIndex={this.setGameIndex.bind(this)}/>
        </div>
        <div className="digitalAtlasRight">
        </div>
      </div>
    );
  }

}