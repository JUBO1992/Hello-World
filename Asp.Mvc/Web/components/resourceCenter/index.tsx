import "./styles/resourceCenter.less";

import * as React from "react";
import {Footer} from "../footer"
// import { Card } from "antd";
import Echarts = require("echarts");

export interface ResourceCenterProps {
}
export interface ResourceCenterState {
}
export class ResourceCenter extends React.Component<ResourceCenterProps, ResourceCenterState>{
  constructor() {
    super();
  }

  componentDidMount() {
    this.createChart();
  }
  componentWillUnmount() {

  }

  private createChart() {
    let myChart1 = Echarts.init(this.refs.graphicDiv1);
    let myChart2 = Echarts.init(this.refs.graphicDiv2);
    let myChart3 = Echarts.init(this.refs.graphicDiv3);
    let myChart4 = Echarts.init(this.refs.graphicDiv4);
    let option = {
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    myChart1.setOption(option);
    myChart2.setOption(option);
    myChart3.setOption(option);
    myChart4.setOption(option);
  }
  refs: {
    [key: string]: any;
    graphicDiv1: HTMLDivElement;
    graphicDiv2: HTMLDivElement;
    graphicDiv3: HTMLDivElement;
    graphicDiv4: HTMLDivElement;
  }

  render() {
    return (
      <div className="resourceCenter" style={{ textAlign: 'center' }}>
        <span style={{ display: 'inherit' }}>This is ResourceCenter!</span>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '500px' }}>
          <div ref="graphicDiv1" style={{ width: '50%', height: '500px', float: 'left' }}/>
          <div ref="graphicDiv2" style={{ width: '50%', height: '500px', float: 'right' }}/>
        </div>
        <div ref="graphicDiv3" style={{ width: '100%', height: '500px'/*, float: 'left'*/ }}/>
        <div ref="graphicDiv4" style={{ width: '100%', height: '500px'/*, float: 'right'*/ }}/>
        <Footer />
      </div>
    );
  }

}