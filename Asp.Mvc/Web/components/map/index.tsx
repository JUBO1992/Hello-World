import "./styles/map.less";
import * as React from "react";

import esriBasemaps = require("esri/basemaps");
import esriMap = require("esri/map");
import SpatialReference = require("esri/SpatialReference");
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");
import ArcGISTiledMapServiceLayer = require("esri/layers/ArcGISTiledMapServiceLayer");
import Scalebar = require("esri/dijit/Scalebar");
import Point = require("esri/geometry/Point");

import {ToolsBar} from "./toolsBar"
import {MeasureTool} from "./measureTool"

//初始化加载地图
let arcgisServerIp = "127.0.0.1:6080";
let databaseName = "gangu";
let mapNamesAndType = {
  //矢量
  vector: {
    name: "JCSJ_SLDT",
    type: "cached"//"dynamic"或"cached"
  },
  //影像
  image: {
    name: "JCSJ_YXDT",
    type: "cached"
  },
  //注记
  label: {
    name: "JCSJ_YXZJ",
    type: "cached"
  }
};

//初始化地图配置
let initMapConfig = {
  vector: {
    layerUrl: "http://" + arcgisServerIp + "/arcgis/rest/services/" + mapNamesAndType.vector.name + "/MapServer",
    layerID: "矢量图",
    layerType: mapNamesAndType.vector.type,
    visible: true
  },
  image: {
    layerUrl: "http://" + arcgisServerIp + "/arcgis/rest/services/" + mapNamesAndType.image.name + "/MapServer",
    layerID: "影像图",
    layerType: mapNamesAndType.image.type,
    visible: false
  },
  label: {
    layerUrl: "http://" + arcgisServerIp + "/arcgis/rest/services/" + mapNamesAndType.label.name + "/MapServer",
    layerID: "注记",
    layerType: mapNamesAndType.label.type,
    visible: false
  },
  centerCoords: [105.272429, 34.805399],
  zoom: 11,
  wkid: 4490
};

export interface MapProps { }
//状态接口
export interface MapStates {
  map?: esriMap;
}
export class Map extends React.Component<MapProps, MapStates> {

  _map: esriMap;
  _dynamicLayer: ArcGISDynamicMapServiceLayer;
  _tileLayer: ArcGISTiledMapServiceLayer;
  constructor(props: MapProps, state: MapStates) {
    super(props);
  }
  componentDidUpdate() {
  }
  componentWillMount() {
  }
  componentDidMount() {
    let map = this.createMap(initMapConfig.centerCoords, initMapConfig.zoom);
    this.addLayer(initMapConfig.vector);
    this.addScaleBar(map);//添加比例尺
    this.refs.toolsBar.setEsriMap(map);
    this.refs.measureTool.setEsriMap(map);
  }

  public addLayer(layerConfig) {
    let layer;
    if (layerConfig.layerType == "dynamic") {
      layer = this.createDynamicMapLayer(layerConfig.layerUrl, layerConfig.layerID, layerConfig.visible);
    } else if (layerConfig.layerType == "cached") {
      layer = this.createTileLayerMapLayer(layerConfig.layerUrl, layerConfig.layerID, layerConfig.visible);
    }
    this._map.addLayer(layer);//添加图层
  }

  public getLayerByLayerId(layerId) {
    let layer = this._map.getLayer(layerId);
    return layer;
  }

  public removeLayer(layerId) {
    let layer = this.getLayerByLayerId(layerId);
    if (layer != undefined) {
      this._map.removeLayer(layer);
    }
  }

  private addScaleBar(map) {
    let scalebar = new Scalebar({
      map: map,
      scalebarUnit: "dual"
    });
  }

  //创建地图（不带基础地图创建地图）
  private createMap(centerCoords, zoom) {
    this._map = new esriMap(this.refs.map, {
      sliderStyle: "small",
      logo: false
    });
    //构建空间参考
    let spatialReference = new SpatialReference({ wkid: initMapConfig.wkid });
    //构建中心坐标点
    let centerPoint = new Point(centerCoords, spatialReference);
    this._map.centerAndZoom(centerPoint, zoom);
    return this._map;

  }

  //创建动态图层
  private createDynamicMapLayer(layerUrl, layerID, visible) {
    let dynamicLayer = new ArcGISDynamicMapServiceLayer(layerUrl, {
      id: layerID,
      visible: visible
    });
    return dynamicLayer;
  }
  //创建缓存图层
  private createTileLayerMapLayer(layerUrl, layerID, visible) {
    let tileLayer = new ArcGISTiledMapServiceLayer(layerUrl, {
      id: layerID,
      visible: visible
    });
    return tileLayer;
  }

  //缩放到点
  public centerAt(point) {
    this._map.centerAt(point);
  }
  //缩放到范围
  public setExtent(extend) {
    this._map.setExtent(extend);
  }

  refs: {
    [key: string]: any;
    map: HTMLDivElement;
    toolsBar: ToolsBar;
    measureTool: MeasureTool;
  }

  render() {
    return (
      <div className="map"  ref="map">
        <ToolsBar ref="toolsBar"/>
        <MeasureTool ref="measureTool"/>
        {this.props.children}
      </div>
    );
  }
}