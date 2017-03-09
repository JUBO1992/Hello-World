import "./styles/sidePanel.less";

import * as React from "react";

export interface SidePanelProps {
  selectedIndex: (index) => void;
}
export interface SidePanelStates {
}
export class SidePanel extends React.Component<SidePanelProps, SidePanelStates> {

  constructor(props: SidePanelProps, states: SidePanelStates) {
    super(props, states);
  }

  componentWillMount() {
  }
  private handleClick(index) {
    this.props.selectedIndex(index);
  }
  refs: {
    [key: string]: any;
  }

  render() {
    let self = this;
    return (
      <div className="gameCenter-sidePanel scroll-1">
        <ul className="gameCenter-ul">
          <li><div onClick={this.handleClick.bind(this,0)}><span>HTMLGAME_推箱子游戏</span></div></li>
          <li><div onClick={this.handleClick.bind(this,1)}><span>HTMLGAME_别踩白块儿</span></div></li>
          <li><div onClick={this.handleClick.bind(this,2)}><span>HTMLGAME_打砖块游戏</span></div></li>
          <li><div onClick={this.handleClick.bind(this,3)}><span>HTMLGAME_2048游戏</span></div></li>
          <li><div onClick={this.handleClick.bind(this,4)}><span>HTMLGAME_NO005</span></div></li>
          <li><div onClick={this.handleClick.bind(this,5)}><span>HTMLGAME_NO006</span></div></li>
          <li><div onClick={this.handleClick.bind(this,6)}><span>HTMLGAME_NO007</span></div></li>
          <li><div onClick={this.handleClick.bind(this,7)}><span>HTMLGAME_NO008</span></div></li>
          <li><div onClick={this.handleClick.bind(this,8)}><span>HTMLGAME_NO009</span></div></li>
          <li><div onClick={this.handleClick.bind(this,9)}><span>HTMLGAME_NO010</span></div></li>
        </ul>
      </div>
    );
  }
}