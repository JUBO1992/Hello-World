import "./styles/topNav.less";

import * as React from "react";
import { Router, Link } from 'react-router';


export interface TopNavProps {
}
export interface TopNavState {
}
export class TopNav extends React.Component<TopNavProps, TopNavState>{
  constructor() {
    super();
  }
  loadLogin() {
    
  }
  refs: {
    [key: string]: any;
  }

  render() {
    return (
      <div className="topNav">
        <nav className="navbar navbar-fixed-top" role="navigation" style={{background: "#273547", opacity: 0.85}}>
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-toggle" aria-expanded="false" aria-controls="navbar">
                {/*<span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>*/}
                <span style={{color: "#FFFFFF"}}>菜单</span>
              </button>
              <Link className="navbar-brand" to="/">Hello World</Link>
            </div>
            <div id="navbar-toggle" className="navbar-collapse collapse">
              <ul className="navbar-nav navbar-right">
                <li>
                  <Link to="/">门户首页</Link>
                </li>
                <li>
                  <a href="/digitalMap">电子地图</a>
                </li>
                <li>
                  <Link to="/digitalAtlas">电子图集</Link>
                </li>
                <li>
                  <Link to="/threeDMap">三维地图</Link>
                </li>
                <li>
                  <Link to="/resourceCenter">资源中心</Link>
                </li>
                <li>
                  <Link to="/developApi">开发接口</Link>
                </li>
                <li>
                  <Link to="/helpCenter">帮助中心</Link>
                </li>
                <li>
                  <Link to="/gameCenter">游戏中心</Link>
                </li>
                <li>
                  <Link to="/">登录</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}