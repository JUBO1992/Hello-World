import "./styles/digitalAtlas.less";

import * as React from "react";
import {SidePanel} from "./sidePanel";
import {PictureArea} from "./pictureArea";

export interface DigitalAtlasProps {
}
export interface DigitalAtlasState {
}
export class DigitalAtlas extends React.Component<DigitalAtlasProps, DigitalAtlasState>{
  constructor() {
    super();
  }
  private setAtlasIndex(index){
    this.refs.pictureArea.setTileSourceIndex(index);
  }
  refs: {
    [key: string]: any;
    pictureArea: PictureArea;
  }

  render() {
    return (
      <div className="digitalAtlas">
        <div className="digitalAtlasLeft">
          <SidePanel ref="sidePanel" selectedIndex={this.setAtlasIndex.bind(this)}/>
        </div>
        <div className="digitalAtlasRight">
        <PictureArea ref="pictureArea"/>
        </div>
      </div>
    );
  }

}