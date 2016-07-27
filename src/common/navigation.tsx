import * as React from "react";

export interface TopNavProps {
}
export interface TopNavState {
  title?: string;
  hasSubmit?: boolean;
}
export class TopNav extends React.Component<TopNavProps, TopNavState>{
  constructor() {
    super();
    this.state = {
      title: "甘谷地理信息",
      hasSubmit: true
    }
  }
  render() {
    return (
      <Nav title={this.state.title} hasSubmit={this.state.hasSubmit}>
        <AALink href="#/">首页</AALink>
        <AALink href="#/digitalMap">电子地图</AALink>
        <AALink href="#/threeDMap">三维地图</AALink>
        <AALink href="#/digitalAtlas">电子图集</AALink>
        <AALink href="#/resourceCenter">资源中心</AALink>
        <AALink href="#/resourceCenter">资源中心</AALink>
        <AALink href="#/resourceCenter">资源中心</AALink>
      </Nav>
    );
  }
}

interface AALinkProps {
  href?: string;
}
interface AALinkState {
  active?: string;
}
class AALink extends React.Component<AALinkProps, AALinkState>{
  constructor() {
    super();
    this.state = {
      active: "unactive"
    }
  }
  render() {
    return (
      <li className={this.state.active}>
        <a className="navbar-brand" href={this.props.href}>{this.props.children}</a>
      </li>
    );
  }
}

var ALink = React.createClass({
  getDefaultProps: function () {
    return { herf: "#" };
  },
  getInitialState: function () {
    return { active: "unactive" };
  },
  handleClick: function (event: any) {
    if (this.state.active == "avtive") {
      this.setState({ active: "unactive" });
    } else {
      this.setState({ active: "active" });
    }
  },
  render: function () {
    return (
      <li className={this.state.active}>
        <a className="navbar-brand" href={this.props.href} onClick={this.handleClick}>{this.props.children}</a>
      </li>
    );
  }
});

interface NavigationProps {
  title?: string;
  hasSubmit?: boolean;
}
class Nav extends React.Component<NavigationProps, {}> {
  constructor(props: NavigationProps) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{this.props.title}</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {this.props.children}
            </ul>
            <ul className="nav navbar-nav pull-right">
              <li>
                <a href="/cn/portal/search/ajax_index_page" onClick="yx_modal_a(event)"> <i className="fa fa-search"></i> </a>
              </li>
            </ul>
            <ul className="nav navbar-nav pull-right" id="menu-user-login">
              <li> <a href="/cn/user/login/index" onClick="yx_modal_a(event)">登录</a> </li>
              <li style={{ borderLeft: '2px #777 solid', height: 23 }}>|</li>
              <li><a href="/cn/user/register/index" onClick="yx_modal_a(event)">注册</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

//<!-- 登录注册框 -->
var Login = React.createClass({
  render: function () {
    return (
        <ul className="nav navbar-nav  pull-right" id="menu-user-login">
          <li> <a href="/cn/user/login/index" onClick="yx_modal_a(event)">登录</a> </li>
          <li style={{ borderLeft: '1px #777 solid', height: 23 }}></li>
          <li><a href="/cn/user/register/index" onClick="yx_modal_a(event)">注册</a></li>
          <li>
            <a href="/cn/portal/search/ajax_index_page" onClick="yx_modal_a(event)"> <i className="fa fa-search"></i> </a>
          </li>
        </ul>
    );
  }
});

