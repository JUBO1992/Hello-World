let dojoConfig = {
  baseUrl: '.',
  packages: [{
    name: 'dgrid',
    location: 'bower_components/dgrid',
  }, {
      name: 'dijit',
      location: 'bower_components/dijit',
    }, {
      name: 'dojo',
      location: 'bower_components/dojo',
    }, {
      name: 'dojox',
      location: 'bower_components/dojox',
    }, {
      name: 'dstore',
      location: 'bower_components/dstore',
    }, {
      name: 'esri',
      location: 'bower_components/esri',
    }, {
      name: 'moment',
      location: 'bower_components/moment',
    }, {
      name: 'react',
      location: 'bower_components/react/dist',
      main: 'react'
    }, {
      name: 'react-dom',
      location: 'bower_components/react-dom/dist',
      main: 'react-dom'
    }, {
      name: 'react-router',
      location: 'bower_components/react-router/umd',
      main: 'ReactRouter'
    }, {
      name: 'react-bootstrap',
      location: 'bower_components/react-bootstrap/dist',
      main: 'react-bootstrap'
    }, {
      name: 'xstyle',
      location: 'bower_components/xstyle'
    }, {
      name: 'put-selector',
      location: 'bower_components/put-selector',
      main: 'put'
    }, {
      name: 'antd',
      location: 'bower_components/antd/dist',
      main: 'antd'
    }, {
      name: 'react-draggable',
      location: 'bower_components/react-draggable/dist',
      main: 'react-draggable'
    }],
  deps: ['xstyle/main']
};

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