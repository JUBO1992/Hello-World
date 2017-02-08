import "./styles/caiBaiKuai.less";

import * as React from "react";

export interface CaiBaiKuaiProps {
}
export interface CaiBaiKuaiState {
}
export class CaiBaiKuai extends React.Component<CaiBaiKuaiProps, CaiBaiKuaiState>{
  constructor() {
    super();
  }
  refs: {
    [key: string]: any;
  }

  render() {
    return (
      <div  style={{ width: '100%', height: '100%', /*display: 'inline-flex',*/ overflow: 'hidden' }}>
        <div className="caiBaiKuai" id="caiBaiKuai">
          <div className="caiBaiKuai-container" id="caiBaiKuai-container">
          </div>
          <div className="caiBaiKuai-mask" id="caiBaiKuai-mask">
            <h1>别踩白块儿</h1>
            <span id="caiBaiKuai-start">开始</span>
          </div>
        </div>
      </div>
    );
  }

}