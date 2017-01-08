import "./styles/threeDMap.less";

import * as React from "react";

export interface ThreeDMapProps {
}
export interface ThreeDMapState {
}
export class ThreeDMap extends React.Component<ThreeDMapProps, ThreeDMapState>{
  constructor() {
    super();
  }
  refs: {
    [key: string]: any;
  }

  render() {
    return (
      <div className="threeDMap">
        <img src={require<string>("./imgs/img_01.png")} style={{ width: '100%', height: '100%', position: 'absolute' }}></img>
        <div className="threeDMapcontent" style={{position: 'relative', textAlign: 'center'}}>
        This is ThreeDMap!
        </div>
      </div>
    );
  }

}