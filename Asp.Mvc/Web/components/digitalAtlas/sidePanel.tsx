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
          <li><div onClick={this.handleClick.bind(this,0)}><span>门户首页图片</span></div></li>
          <li><div onClick={this.handleClick.bind(this,1)}><span>电子地图图片</span></div></li>
          <li><div onClick={this.handleClick.bind(this,2)}><span>电子图集图片</span></div></li>
          <li><div onClick={this.handleClick.bind(this,3)}><span>三维地图图片</span></div></li>
          <li><div onClick={this.handleClick.bind(this,4)}><span>资源中心图片</span></div></li>
          <li><div onClick={this.handleClick.bind(this,5)}><span>开发接口图片</span></div></li>
          <li><div onClick={this.handleClick.bind(this,6)}><span>帮助中心图片</span></div></li>
        </ul>
      </div>
    );
  }
}