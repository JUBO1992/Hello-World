import "./styles/developApi.less";

import * as React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { Router, Link } from 'react-router';
import { Footer } from "../footer";


export class DevelopApi extends React.Component<any, void> {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="developApi" >
        <div style={{ width: '100%' }}>
          <Image width={1920} height={565} alt="900x500" src={require<string>("./imgs/interfaceBanner.jpg") } responsive />
        </div>
        <div className="row" style={{ width: '100%' }}>
          <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
            <div className="newTitle"></div>
          </div>
        </div>

        {/** JavaScript开发 */}
        <Row style={{ width: '100%' }}>
          <Col span={24}>
            <div style={{ textAlign: "center" }}>
              <Link to="/developApi">
                <img src={require<string>("./imgs/imac-full.png") } />
              </Link>
            </div>
            <h2 style={{ textAlign: "center" }}>JavaScript开发</h2>
            <div style={{ textAlign: "center", paddingTop: "5px" }}>
              <h6>针对甘谷县地理信息服务平台提供的时空资源，使用JavaScript编写，适用Web端的应用程序。可以实现基础地图服务调用、空间查询服务、空间统计服务、定位服务等。</h6>
            </div>
            <div style={{ textAlign: "center", paddingTop: "15px" }}>
              <a href="/developApi" target="_blank">
                <Image style={{ display: 'inline-block' }} src={require<string>("./imgs/desktop-features-analytic.png") } responsive />
              </a>
            </div>
          </Col>
        </Row>

        {/** iOS开发 */}
        <Row style={{ width: '100%' }}>
          <Col span={24}>
            <div style={{ textAlign: "center" }}>
              <Link to="/developApi">
                <img src={require<string>("./imgs/apple-full.png") } />
              </Link>
            </div>
            <h2 style={{ textAlign: "center" }}>iOS开发</h2>
            <div style={{ textAlign: "center", paddingTop: "5px" }}>
              <h6> 针对甘谷县地理信息服务平台提供的时空资源，适用iOS移动设备应用，包括iPad，iPhone等。可以实现基础地图服务调用、空间查询服务、空间统计服务、定位服务等。</h6>
            </div>
            <div style={{ textAlign: "center", paddingTop: "15px" }}>
              <a href="/developApi" target="_blank">
                <Image style={{ display: 'inline-block' }} src={require<string>("./imgs/features-apps.png") } responsive />
              </a>
            </div>
          </Col>
        </Row>

        {/** Android开发 */}
        <Row style={{ width: '100%' }}>
          <Col span={24}>
            <div style={{ textAlign: "center" }}>
              <Link to="/developApi">
                <img src={require<string>("./imgs/android-full.png") }/>
              </Link>
            </div>
            <h2 style={{ textAlign: "center" }}>Android开发</h2>
            <div style={{ textAlign: "center", paddingTop: "5px" }}>
              <h6>针对甘谷县地理信息服务平台提供的时空资源，适用Android移动设备应用，包括平板，手机等。可以实现基础地图服务调用、空间查询服务、空间统计服务、定位服务等。</h6>
            </div>
            <div style={{ textAlign: "center", paddingTop: "15px" }}>
              <a href="/developApi" target="_blank">
                <Image style={{ display: 'inline-block' }} src={require<string>("./imgs/server-features-enterprise.png") } responsive />
              </a>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}