import "./styles/zoomTool.less";
import * as React from "react";

import esriMap = require("esri/map");
import navigation = require("esri/toolbars/navigation");
import on = require("dojo/on");
import dom = require("dojo/dom");

export interface ZoomToolProps {

}

export class ZoomTool extends React.Component<ZoomToolProps, {}>{

  navToolbar: navigation;
  esrimap: esriMap;
  constructor(props: ZoomToolProps) {
    super(props);
  }

  public setEsriMap(map: esriMap) {
    this.navToolbar = new navigation(map);
    this.esrimap = map;

    on(this.navToolbar, "onExtentHistoryChange", extentHistoryChangeHandler);
    function extentHistoryChangeHandler() {
      dom.byId("zoomprev").disabled = this.myNavToolbar.isFirstExtent();
      dom.byId("zoomnext").disabled = this.myNavToolbar.isLastExtent();
    }
    let self = this;

    on(dom.byId("zoomin"), "click", function () {
      self.navToolbar.activate(navigation.ZOOM_IN);
    });
    on(dom.byId("zoomout"), "click", function () {
      self.navToolbar.activate(navigation.ZOOM_OUT);
    });
    on(dom.byId("zoomfullext"), "click", function () {
      self.navToolbar.zoomToFullExtent();
    });
    on(dom.byId("zoomprev"), "click", function () {
      self.navToolbar.zoomToPrevExtent();
    });
    on(dom.byId("zoomnext"), "click", function () {
      self.navToolbar.zoomToNextExtent();
    });
    on(dom.byId("pan"), "click", function () {
      self.navToolbar.activate(navigation.PAN);
    });
  }

  public deactivate() {
    this.navToolbar.deactivate();
  }

  render() {
    return (
      <div>
        <img className="zoomtool" id="zoomin"      title="拉框放大" src={require<string>("./imgs/airplane.png") }/>
        <img className="zoomtool" id="zoomout"     title="拉框缩小" src={require<string>("./imgs/book.png") }/>
        <img className="zoomtool" id="zoomfullext" title="显示全图" src={require<string>("./imgs/calendar.png") }/>
        <img className="zoomtool" id="zoomprev"    title="前一视图" src={require<string>("./imgs/house.png") }/>
        <img className="zoomtool" id="zoomnext"    title="后一视图" src={require<string>("./imgs/image.png") }/>
        <img className="zoomtool" id="pan"         title="平移工具" src={require<string>("./imgs/loupe.png") }/>
      </div>
    )
  }

}