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
        <ALink href="#/">首页</ALink>
        <ALink href="#/digitalMap">电子地图</ALink>
        <ALink href="#/threeDMap">三维地图</ALink>
        <ALink href="#/digitalAtlas">电子图集</ALink>
        <ALink href="#/resourceCenter">资源中心</ALink>
      </Nav>
    );
  }
}

export interface NavigationProps {
  title?: string;
  hasSubmit?: boolean;
}
export class Nav extends React.Component<NavigationProps, {}> {
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

var LoginForm = React.createClass({
  handleClick: function (event: any) {
    var obj = document.getElementById("userName");
    if (obj) {
      var msg = obj.innerText;
      alert(msg);
    }
  },
  render: function () {
    return (
      <form className="navbar-form navbar-right" role="search">
        <div className="form-group">
          <input id="userName" type="text" className="form-control" placeholder="Email"></input>
          <input id="passWord" type="password" className="form-control" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn btn-success" onClick={this.handleClick}>Sign in</button>
      </form>
    );
  }
});

//<!-- 登录注册框 -->
var Login = React.createClass({
  render: function () {
    return (
      <div id="container">
        <ul className="navbar-nav navbar-nav-ul-padding-top pull-right">
          <li>
            <a href="/cn/portal/search/ajax_index_page" onClick="yx_modal_a(event)"> <i className="fa fa-search"></i> </a>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-ul-padding-top pull-right" id="menu-user-login">
          <li> <a href="/cn/user/login/index" onClick="yx_modal_a(event)">登录</a> </li>
          <li style={{ borderLeft: '1px #777 solid', height: 23 }}></li>
          <li><a href="/cn/user/register/index" onClick="yx_modal_a(event)">注册</a></li>
        </ul>
        <ul className="navbar-nav navbar-nav-userinfo-padding-top  pull-right" style={{ display: 'none' }}>
          <li className="dropdown" id="menu-user-info">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <img src="/cn/tpl/simplebootx//Public/images/headicon.png" className="headicon" id="main-menu-user-headicon" /> <span className="user-nicename" id="main-menu-user-nicename"></span> </a>
            <ul className="dropdown-menu">
              <li><a href="/cn/user/book/index"><i className="fa fa-user"></i> &nbsp; 个人中心</a></li>
              <li><a href="/cn/user/index/logout2"><i className="fa fa-sign-out"></i> &nbsp; 退出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
});

