import "./styles/pictureArea.less";

import * as React from "react";
import OpenSeadragon = require("openSeadragon");

export interface PictureAreaProps {
}
export interface PictureAreaState {
}
export class PictureArea extends React.Component<PictureAreaProps, PictureAreaState>{
  viewer: any;
  imageArray: Array<String> = [];
  prefixUrl: string = "./dist/images/openSeadragonImg/";

  constructor() {
    super();
  }
  componentDidMount() {
    this.createOpenSeadragon();
  }
  private createOpenSeadragon() {
    this.imageArray = [
      "./dist/images/TuCeTuJi/homepage.xml",
      "./dist/images/TuCeTuJi/digitalmap.xml",
      "./dist/images/TuCeTuJi/digitalatlas.xml",
      "./dist/images/TuCeTuJi/threedmap.xml",
      "./dist/images/TuCeTuJi/resourcecenter.xml",
      "./dist/images/TuCeTuJi/developapi.xml",
      "./dist/images/TuCeTuJi/helpcenter.xml"];
    this.viewer = OpenSeadragon({
      id: "atlas-container",  //容器id
      sequenceMode: true,
      prefixUrl: this.prefixUrl, //openseadragon插件资源路径
      showNavigator: true,  //鹰眼控制按钮
      tileSources: this.imageArray,
      navigatorPosition: "BOTTOM_RIGHT",
      nextButton: "next-img",       //下一张图片
      previousButton: "previous-img",   //前一张图片
      showFullPageControl: false,
      showHomeControl: false,
      showZoomControl: false,
    });
  }
  public setTileSourceIndex(index) {
    this.viewer.goToPage(index);
  }
  refs: {
    [key: string]: any;
  }

  render() {
    let leftSrcPath = require<string>("./imgs/featured-left-arrow.png");
    let rightSrcPath = require<string>("./imgs/featured-right-arrow.png");

    return (
      <div className="pictureArea">
        <div className="previousDiv">
          <img id="previous-img" src={leftSrcPath} title="上一张" />
        </div>
        <div className="nextDiv" >
          <img id="next-img" src={rightSrcPath} title="下一张"/>
        </div>
        <div id="atlas-container"></div>
      </div>
    );
  }

}