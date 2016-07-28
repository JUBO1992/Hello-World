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
            {/** 
            <ul className="nav navbar-nav navbar-right">
              <li><a className="navbar-brand" href="/cn/user/login/index">登录</a> </li>
              <li><a className="navbar-brand" href="/cn/user/register/index">注册</a></li>
              <li>
                <a className="navbar-brand" href="/cn/portal/search/ajax_index_page"> <i className="fa fa-search"></i> </a>
              </li>
            </ul>
            */}
            <Login/>
          </div>
        </div>
      </nav>
    );
  }
}

var Login = React.createClass({
  render: function () {
    return (
      <div>
        <form className="navbar-form navbar-right">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">登录</button>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">注册</button>
          <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
        </form>

        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="container">
                <form className="form-signin">
                  <h2 className="form-signin-heading">Please sign in</h2>
                  <label htmlFor="inputEmail" className="sr-only">Email address</label>
                  {/** 
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address"></input>
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password"></input>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="remember-me"> Remember me</input>
                    </label>
                  </div>
                  */}
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              ...
            </div>
          </div>
        </div>
      </div>
    );
  }
});
