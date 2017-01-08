import "./styles/helpCenter.less";

import * as React from "react";
import {Footer} from "../footer"
import { Router, Link } from 'react-router';
import { Navbar, Nav, NavItem, Table, Button, NavDropdown, Grid, Row, Thumbnail, Col } from 'react-bootstrap';

export interface HelpCenterProps {
}
export interface HelpCenterState {
}
export class HelpCenter extends React.Component<HelpCenterProps, HelpCenterState>{
  constructor() {
    super();
  }
  refs: {
    [key: string]: any;
  }

  render() {
    return (
      <div className="helpCenter">
        <div className="resources">
          <div className="h3">Help Center</div>
          <div className="h3">帮助中心</div>
          <div className="row" style={{ width: '100%' }}>
            <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
              <div className="newTitle"></div>
            </div>
          </div>
          <div className="container">
            <div style={{ width: '100px' }}></div>
            <Link to="/digitalMap" target="_blank">
              <Col xs={3} md={3}>
                <Thumbnail src={require<string>("./imgs/dd_01.png") } alt="242x200">
                  <h4>矢量数据</h4>
                </Thumbnail>
              </Col>
            </Link>
            <Link to="/digitalMap" target="_blank">
              <Col xs={3} md={3} >
                <Thumbnail src={require<string>("./imgs/dd_03.png") } alt="242x200">
                  <h4>影像数据</h4>
                </Thumbnail>
              </Col>
            </Link>
            <Link to="/digitalMap" target="_blank">
              <Col xs={3} md={3} >
                <Thumbnail src={require<string>("./imgs/dd_02.png") } alt="242x200">
                  <h4>三维数据</h4>
                </Thumbnail>
              </Col>
            </Link>
            <Link to="/digitalMap" target="_blank">
              <Col xs={3} md={3} >
                <Thumbnail src={require<string>("./imgs/dd_04.png") } alt="242x200">
                  <h4>专题数据</h4>
                </Thumbnail>
              </Col>
            </Link>
            <div style={{ width: '100px' }}></div>
          </div>
        </div>

        <div className="digital">
          <div style={{ width: '100%' }}>
            <img className="digitalImg" width={1920} height={439} alt="1920x439" src={require<string>("./imgs/digitalMap.png") } />
            <div className="row" style={{ width: '100%' }}>
              <div className="col-xs-8 col-sm-6">
                <a className="learnMore span" href="/digitalMap">
                  <span>了解更多</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="typical">
                <div className="h3">Demonstration Applications</div>
                <div className="h3">示范应用</div>
                <div className="row" style={{ width: '100%' }}>
                    <div className="col-md-12 col-xs-12 col-sm-12">
                        <div className="newTitle"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" style={{ textAlign: 'center' }}>
                        <a href="/digitalMap?ztzs" target="_blank">
                            <div className="ThemeItem col-lg-3">
                                <div style={{ textAlign: 'center' }}><h5>专题展示</h5></div>
                                <div className="item-wrapper">
                                    <div> <img src={require<string>("./imgs/dt_03.png")} style={{ width: '246px', height: '140px' }}></img></div>
                                </div>
                                <div style={{ wordBreak: 'break-all' }}><h6>甘谷县各乡镇专题地图，以乡镇级行政界线为界，界线外主要矢量数据选择表达，按照乡镇村界渲染颜色制作底图。</h6></div>
                            </div>
                        </a>
                        <a href="/digitalMap?nctd" target="_blank">
                            <div className="ThemeItem col-lg-3">
                                <div style={{ textAlign: 'center' }}><h5>农村土地</h5></div>
                                <div className="item-wrapper">
                                    <div> <img src={require<string>("./imgs/dt_04.png")} style={{ width: '246px', height: '140px' }}></img></div>
                                </div>
                                <div style={{ wordBreak: 'break-all' }}><h6>农村土地信息专题以安远镇作为试点进行重点建设，展示土地类型、发包方承包地块信息及权属来源相关的内容。</h6></div>
                            </div>
                        </a>
                        <a href="/digitalMap?jzfp" target="_blank">
                            <div className="ThemeItem col-lg-3">
                                <div style={{ textAlign: 'center' }}><h5>精准扶贫</h5></div>
                                <div className="item-wrapper">
                                    <div> <img src={require<string>("./imgs/dt_01.png")} style={{ width: '246px', height: '140px' }}></img></div>
                                </div>
                                <div style={{ wordBreak: 'break-all' }}><h6>通过地图展示县、镇、村包含的贫困人口总数,贫困发生率以及贫困人口构成,总体了解县、镇、村内的贫困人口情况。</h6></div>
                            </div>
                        </a>
                        <a href="/threeDMap" target="_blank">
                            <div className="ThemeItem col-lg-3">
                                <div style={{ textAlign: 'center' }}><h5>三维平台</h5></div>
                                <div className="item-wrapper">
                                    <div> <img src={require<string>("./imgs/dt_02.png")} style={{ width: '246px', height: '140px' }}></img></div>
                                </div>
                                <div style={{ wordBreak: 'break-all' }}><h6>三维空间地理信息软件平台，其功能强大、三维表达尺度全面，实现了地上、地表、地下信息一体化集成表达。</h6></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        <Footer />
      </div>
    );
  }

}