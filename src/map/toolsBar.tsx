/// <reference path="styles.d.ts" />
import * as React from "react";


import {Panel} from "react-bootstrap";
import Draggable = require('react-draggable');

import {ZoomTool} from "./zoomTool";

import toolsBarStyle = require("xstyle/css!./styles/toolsBar.css");

export interface ToolsBarProps {
    onClick?: (key: Object) => void;
};
export interface ToolsBarStates { };

export class ToolsBar extends React.Component<ToolsBarProps, {}>{

    static toolsBarStyle = toolsBarStyle;
    constructor(props: ToolsBarProps) {
        super(props);
    }
    componentDidMount() {

    }
    public setEsriMap(map) {
        this.refs.zoomTool.setEsriMap(map);
    }

    private clear() {
        this.refs.zoomTool.deactivate();
    }
    refs: {
        [key: string]: any;
        zoomTool: ZoomTool;
    }

    render() {
        return (
            <Draggable>
                <div className="toolsBar">
                    <Panel>
                        <ZoomTool ref="zoomTool"/>
                    </Panel>
                </div>
            </Draggable>
        );
    }
}