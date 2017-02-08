import "./styles/gameCenter.less";

import * as React from "react";
import {SidePanel} from "./sidePanel";
// import {Col} from 'antd';

import {CaiBaiKuai} from "./caiBaiKuai"
import {TuiXiangZi} from "./tuiXiangZi"
import {DaZhuanKuai} from "./daZhuanKuai"
import {ErLingSiBa} from "./erLingSiBa"

export interface GameCenterProps {
}
export interface GameCenterState {
  index: Number;
}
export class GameCenter extends React.Component<GameCenterProps, GameCenterState>{
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }
  private setGameIndex(index) {
    this.setState({ index: index });
  }
  refs: {
    [key: string]: any;
  }

  render() {
    return (
      <div className="gameCenter">
        <div className="gameCenterLeft">
          <SidePanel ref="sidePanel" selectedIndex={this.setGameIndex.bind(this) }/>
        </div>
        <div className="gameCenterRight">
          {this.state.index == 0 && <TuiXiangZi/>}
          {this.state.index == 1 && <CaiBaiKuai/>}
          {this.state.index == 2 && <DaZhuanKuai/>}
          {this.state.index == 3 && <ErLingSiBa/>}
        </div>
      </div>
    );
  }

}