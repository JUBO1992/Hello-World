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
      <div className="digitalAtlas-sidePanel">
        <ul className="digitalAtlas-ul">
          <li><div onClick={this.handleClick.bind(this,0)}><span>HTMLGAME_NO001</span></div></li>
          <li><div onClick={this.handleClick.bind(this,1)}><span>HTMLGAME_NO002</span></div></li>
          <li><div onClick={this.handleClick.bind(this,2)}><span>HTMLGAME_NO003</span></div></li>
          <li><div onClick={this.handleClick.bind(this,3)}><span>HTMLGAME_NO004</span></div></li>
          <li><div onClick={this.handleClick.bind(this,4)}><span>HTMLGAME_NO005</span></div></li>
          <li><div onClick={this.handleClick.bind(this,5)}><span>HTMLGAME_NO006</span></div></li>
          <li><div onClick={this.handleClick.bind(this,6)}><span>HTMLGAME_NO007</span></div></li>
        </ul>
      </div>
    );
  }
}