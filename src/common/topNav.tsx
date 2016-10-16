import * as React from "react";

import {Login} from "./login"
import topNavStyle = require("xstyle/css!./styles/topNav.css");

export interface TopNavProps {
}
export interface TopNavState {
}
export class TopNav extends React.Component<TopNavProps, TopNavState>{
  static topNavStyle = topNavStyle;
  constructor() {
    super();
  }
  loadLogin() {
    this.refs.login.showLogin();
  }
  refs: {
    [key: string]: any;
    login: Login;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top" role="navigation" style={{background: "#273547"}}>
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-toggle" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Hello World</a>
            </div>
            <div id="navbar-toggle" className="navbar-collapse collapse">
              <ul className="navbar-nav navbar-right">
                <li>
                  <a className="navbar-brand navbar-item" href="#/">门户首页</a>
                </li>
                <li>
                  <a className="navbar-brand navbar-item" href="#/digitalMap">电子地图</a>
                </li>
                <li>
                  <a className="navbar-brand navbar-item" href="#/digitalAtlas">电子图集</a>
                </li>
                <li>
                  <a className="navbar-brand navbar-item" href="#/threeDMap">三维地图</a>
                </li>
                <li>
                  <a className="navbar-brand navbar-item" href="#/resourceCenter">资源中心</a>
                </li>
                <li>
                  <a className="navbar-brand navbar-item loginButton" onClick={this.loadLogin.bind(this)}>登录</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Login ref="login"/>
      </div>
    );
  }
}