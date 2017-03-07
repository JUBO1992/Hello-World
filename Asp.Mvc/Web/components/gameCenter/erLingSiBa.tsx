import "./styles/erLingSiBa.less";

import * as React from "react";

export interface ErLingSiBaProps {
}
export interface ErLingSiBaState {
}
/**
 * 2048游戏
 */
export class ErLingSiBa extends React.Component<ErLingSiBaProps, ErLingSiBaState>{
  constructor() {
    super();
  }

  componentDidMount() {
  }

  newgame(e){
  }

  refs: {
    [key: string]: any;
  }

  render() {
    return (
      <div  style={{ width: '100%', height: '100%', display: 'inline-flex', overflow: 'hidden' }}>
        <div className="ErLingSiBa" id="ErLingSiBa"  style={{ margin: 'auto' }}>
          <div className="header">
            <a href="javascript:newgame();" id="newgamebutton"  onClick={this.newgame.bind(this)}>重新开始</a>
            <p>得分: <span id="score">0</span></p>
          </div>

          <div id="grid-container">
            <div className="grid-cell" id="grid-cell-0-0"></div>
            <div className="grid-cell" id="grid-cell-0-1"></div>
            <div className="grid-cell" id="grid-cell-0-2"></div>
            <div className="grid-cell" id="grid-cell-0-3"></div>

            <div className="grid-cell" id="grid-cell-1-0"></div>
            <div className="grid-cell" id="grid-cell-1-1"></div>
            <div className="grid-cell" id="grid-cell-1-2"></div>
            <div className="grid-cell" id="grid-cell-1-3"></div>

            <div className="grid-cell" id="grid-cell-2-0"></div>
            <div className="grid-cell" id="grid-cell-2-1"></div>
            <div className="grid-cell" id="grid-cell-2-2"></div>
            <div className="grid-cell" id="grid-cell-2-3"></div>

            <div className="grid-cell" id="grid-cell-3-0"></div>
            <div className="grid-cell" id="grid-cell-3-1"></div>
            <div className="grid-cell" id="grid-cell-3-2"></div>
            <div className="grid-cell" id="grid-cell-3-3"></div>
          </div>
        </div>
      </div>
    );
  }

}