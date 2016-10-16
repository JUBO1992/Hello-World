/// <reference path="styles.d.ts" />
import * as React from "react";


import {Panel} from "react-bootstrap";
// import Draggable = require('react-draggable');

//import {ZoomTool} from "../map/zoomTool";

import toolBarStyle = require("xstyle/css!./styles/toolsBar.css");

export interface ToolsBarProps {
    onClick?: (key: Object) => void;
};
export interface ToolsBarStates { };

export class ToolsBar extends React.Component<ToolsBarProps, {}>{

    static toolBarStyle = toolBarStyle;
    constructor(props: ToolsBarProps) {
        super(props);
    }
    componentDidMount() {

    }
    public setMap(map) {
        // this.refs.zoomTool.setMap(map);
    }
    private clickHandler(e) {
        let dom = $("#" + e.target.alt);
        if (dom.css("display") == "none") {
            dom.css("display", "block");
        } else {
            dom.css("display", "none");
        }
    }
    // 卷帘的位置设置
    private swipeClickHandler(e) {
        let dom = $("#" + e.target.alt);
        if (dom.css("display") == "none") {
            dom.css("display", "block");
        } else {
            dom.css("display", "none");
        }
        // 设置卷帘的位置,当卷帘的位置不在默认位置时，设置到默认位置
        let dom2 = $(".vertical");
        // if (dom2.css("left") != swipeConfig.layerSwipe.left + "px") {
        //     dom2.css("left", swipeConfig.layerSwipe.left + "px");
        // }

    }

    private clear() {
        // this.refs.zoomTool.deactivate();
    }
    refs: {
        [key: string]: any;
        // zoomTool: ZoomTool;
    }

    render() {
        // let zoomItems = zoomToolConfig.zoomToolItems;
        return (
            <div></div>
            /*<Draggable>
                <div className="toolsBar">
                    <Panel>
                        <div>
                            <ZoomTool ref="zoomTool" zoomItems={zoomItems}/>
                            <img src="components/map/imgs/basetool.png" className="commnTool"  title="基本工具" alt={draggablePanelConfig.draggablePanelBasetool.id}  onClick={this.clickHandler.bind(this) }/>
                            <img src="components/map/imgs/layer.png" className="commnTool"  title="图层列表" alt={draggablePanelConfig.draggablePanelLayerList.id} onClick={this.clickHandler.bind(this) }/>
                            <img src="components/map/imgs/measure.png" className="commnTool"  title="测量工具"  alt={draggablePanelConfig.draggablePanelMapMeasure.id} onClick={this.props.onClick}/>
                            <img src="components/map/imgs/swipe.png" className="commnTool"  title="卷帘工具" alt={draggablePanelConfig.draggablePanelSwipe.id} onClick={this.props.onClick}/>
                            <img src="components/map/imgs/position.png" className="commnTool"  title="行政区定位" alt={draggablePanelConfig.draggablePanelPositon.id} onClick={this.props.onClick}/>
                            <img src="components/map/imgs/info.png" className="commnTool"  title="属性查询" alt="" onClick={this.clickHandler.bind(this) }/>
                            <img src="components/map/imgs/clear.png" className="commnTool" title="清除"  onClick={this.clear.bind(this) }/>
                        </div>
                    </Panel>
                </div>
            </Draggable>*/
        );
    }
}