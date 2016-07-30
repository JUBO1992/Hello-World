import * as React from "react";

import navigationStyle = require("xstyle/css!./styles/navigation.css");

export interface TopNavProps {
}
export interface TopNavState {
  title?: string;
  hasSubmit?: boolean;
}
export class TopNav extends React.Component<TopNavProps, TopNavState>{
  static navigationStyle = navigationStyle;
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
        <AALink href="#/digitalAtlas">电子图集</AALink>
        <AALink href="#/threeDMap">三维地图</AALink>
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
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-toggle" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">{this.props.title}</a>
            </div>
            <div id="navbar-toggle" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                {this.props.children}
              </ul>
              <LoginButton/>
            </div>
          </div>
        </nav>
        <LoginForm/>
      </div>
    );
  }
}

var LoginButton = React.createClass({
  render: function () {
    return (
      <div>
        <form className="navbar-form navbar-right">
          <a href="#/loginPage" className="btn btn-primary active" role="button">登录页</a>
          <a href="#/registerPage" className="btn btn-danger active" role="button">注册页</a>
          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#loginModal">登录</button>
          <button type="button" className="btn btn-info" data-toggle="modal" data-target="#registerModal">注册</button>
          <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#searchModal"><i className="fa fa-search"></i></button>
        </form>
      </div>
    );
  }
});

var LoginForm = React.createClass({
  render: function () {
    return (
      <div>

        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times; </span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times; </span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="searchModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times; </span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});
