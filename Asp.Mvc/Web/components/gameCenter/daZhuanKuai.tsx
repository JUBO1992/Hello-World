import "./styles/daZhuanKuai.less";

import * as React from "react";

class Ball {
  x: number; y: number; dx: number; dy: number; r: number;
  constructor(x, y, dx, dy, r) {
    this.x = x; this.y = y; this.dx = dx; this.dy = dy; this.r = r;
  }
}

class Padd {
  x: number; w: number; h: number; img: any;
  constructor(x, w, h, img) {
    this.x = x; this.w = w; this.h = h; this.img = img;
  }
}

class Bricks {
  w: number; h: number; r: any; c: any; p: any;
  objs: any;
  colors: Array<string>;
  constructor(w, h, r, c, p) {
    this.w = w;
    this.h = h;
    this.r = r; // rows
    this.c = c; // cols
    this.p = p; // padd
    this.objs;
    this.colors = ['#9d9d9d', '#f80207', '#feff01', '#0072ff', '#fc01fc', '#03fe03']; // colors for rows
  }
}

export interface DaZhuanKuaiProps {
}
export interface DaZhuanKuaiState {
}
export class DaZhuanKuai extends React.Component<DaZhuanKuaiProps, DaZhuanKuaiState>{
  ctx: any;
  iStart: number = 0;
  bRightBut: boolean = false;
  bLeftBut: boolean = false;
  oBall: any; oPadd: any; oBricks: any;
  aSounds: Array<any> = [];
  iPoints: number = 0;
  iGameTimer: number = 0;
  iElapsed: number = 0;
  iMin: number = 0;
  iSec: number = 0;
  sLastTime: any;
  sLastPoints: any;

  constructor() {
    super();
  }
  componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d");//画布
    this.init();
  }

  private init() {
    let self = this;
    let width = this.refs.canvas.width;
    let height = this.refs.canvas.height;

    let padImg = new Image();
    padImg.src = require<string>("./imgs/daZhuanKuai/padd.png");
    padImg.onload = function () { };

    this.oBall = new Ball(width / 2, 550, 0.5, -5, 10);
    this.oPadd = new Padd(width / 2, 120, 20, padImg);
    this.oBricks = new Bricks((width / 8) - 1, 20, 6, 8, 2);

    this.oBricks.objs = new Array(this.oBricks.r); // fill-in bricks
    for (let i = 0; i < this.oBricks.r; i++) {
      this.oBricks.objs[i] = new Array(this.oBricks.c);
      for (let j = 0; j < this.oBricks.c; j++) {
        this.oBricks.objs[i][j] = 1;
      }
    }

    // this.aSounds[0] = new Audio(require<string>('./media/daZhuanKuai/snd1.wav'));
    // this.aSounds[0].volume = 0.9;
    // this.aSounds[1] = new Audio(require<string>('./media/daZhuanKuai/snd2.wav'));
    // this.aSounds[1].volume = 0.9;
    // this.aSounds[2] = new Audio(require<string>('./media/daZhuanKuai/snd3.wav'));
    // this.aSounds[2].volume = 0.9;

    this.iStart = setInterval(self.drawScene(), 10); // loop drawScene
    this.iGameTimer = setInterval(self.countTimer(), 1000); // inner game timer

    // HTML5 Local storage - get values
    this.sLastTime = localStorage.getItem('last-time');
    this.sLastPoints = localStorage.getItem('last-points');

    $(window).keydown(function (event) { // keyboard-down alerts
      switch (event.keyCode) {
        case 37: // 'Left' key
          this.bLeftBut = true;
          break;
        case 39: // 'Right' key
          this.bRightBut = true;
          break;
      }
    });
    $(window).keyup(function (event) { // keyboard-up alerts
      switch (event.keyCode) {
        case 37: // 'Left' key
          this.bLeftBut = false;
          break;
        case 39: // 'Right' key
          this.bRightBut = false;
          break;
      }
    });

    var iCanvX1 = $(this.refs.canvas).offset().left;
    var iCanvX2 = iCanvX1 + width;
    $(this.refs.canvas).mousemove(function (e) { // binding mousemove event
      if (e.pageX > iCanvX1 && e.pageX < iCanvX2) {
        self.oPadd.x = Math.max(e.pageX - iCanvX1 - (self.oPadd.w / 2), 0);
        self.oPadd.x = Math.min(self.ctx.canvas.width - self.oPadd.w, self.oPadd.x);
      }
    });
  }

  private clearCanvas() { // clear canvas function
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // fill background
    this.ctx.fillStyle = '#111';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  private drawScene() { // main drawScene function
    this.clearCanvas(); // clear canvas
    // draw Ball (circle)
    this.ctx.fillStyle = '#f66';
    this.ctx.beginPath();
    this.ctx.arc(this.oBall.x, this.oBall.y, this.oBall.r, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fill();

    if (this.bRightBut)
      this.oPadd.x += 5;
    else if (this.bLeftBut)
      this.oPadd.x -= 5;

    // draw Padd (rectangle)
    this.ctx.drawImage(this.oPadd.img, this.oPadd.x, this.ctx.canvas.height - this.oPadd.h);

    // draw bricks (from array of its objects)
    for (let i = 0; i < this.oBricks.r; i++) {
      this.ctx.fillStyle = this.oBricks.colors[i];
      for (let j = 0; j < this.oBricks.c; j++) {
        if (this.oBricks.objs[i][j] == 1) {
          this.ctx.beginPath();
          this.ctx.rect((j * (this.oBricks.w + this.oBricks.p)) + this.oBricks.p, (i * (this.oBricks.h + this.oBricks.p)) + this.oBricks.p, this.oBricks.w, this.oBricks.h);
          this.ctx.closePath();
          this.ctx.fill();
        }
      }
    }

    // collision detection
    let iRowH = this.oBricks.h + this.oBricks.p;
    let iRow = Math.floor(this.oBall.y / iRowH);
    let iCol = Math.floor(this.oBall.x / (this.oBricks.w + this.oBricks.p));

    // mark brick as broken (empty) and reverse brick
    if (this.oBall.y < this.oBricks.r * iRowH && iRow >= 0 && iCol >= 0 && this.oBricks.objs[iRow][iCol] == 1) {
      this.oBricks.objs[iRow][iCol] = 0;
      this.oBall.dy = -this.oBall.dy;
      this.iPoints++;

      // this.aSounds[0].play(); // play sound
    }

    // reverse X position of ball
    if (this.oBall.x + this.oBall.dx + this.oBall.r > this.ctx.canvas.width || this.oBall.x + this.oBall.dx - this.oBall.r < 0) {
      this.oBall.dx = -this.oBall.dx;
    }

    if (this.oBall.y + this.oBall.dy - this.oBall.r < 0) {
      this.oBall.dy = -this.oBall.dy;
    } else if (this.oBall.y + this.oBall.dy + this.oBall.r > this.ctx.canvas.height - this.oPadd.h) {
      if (this.oBall.x > this.oPadd.x && this.oBall.x < this.oPadd.x + this.oPadd.w) {
        this.oBall.dx = 10 * ((this.oBall.x - (this.oPadd.x + this.oPadd.w / 2)) / this.oPadd.w);
        this.oBall.dy = -this.oBall.dy;

        // this.aSounds[2].play(); // play sound
      }
      else if (this.oBall.y + this.oBall.dy + this.oBall.r > this.ctx.canvas.height) {
        clearInterval(this.iStart);
        clearInterval(this.iGameTimer);

        // HTML5 Local storage - save values
        localStorage.setItem('last-time', this.iMin + ':' + this.iSec);
        localStorage.setItem('last-points', this.iPoints + '');

        // this.aSounds[1].play(); // play sound
      }
    }

    this.oBall.x += this.oBall.dx;
    this.oBall.y += this.oBall.dy;

    this.ctx.font = '16px Verdana';
    this.ctx.fillStyle = '#fff';
    this.iMin = Math.floor(this.iElapsed / 60);
    this.iSec = this.iElapsed % 60;
    // if (this.iMin < 10) this.iMin = "0" + this.iMin;
    // if (this.iSec < 10) this.iSec = "0" + this.iSec;
    this.ctx.fillText('Time: ' + this.iMin + ':' + this.iSec, 600, 520);
    this.ctx.fillText('Points: ' + this.iPoints, 600, 550);

    if (this.sLastTime != null && this.sLastPoints != null) {
      this.ctx.fillText('Last Time: ' + this.sLastTime, 600, 460);
      this.ctx.fillText('Last Points: ' + this.sLastPoints, 600, 490);
    }
  }

  private countTimer() {
    this.iElapsed++;
  }

  refs: {
    [key: string]: any;
    canvas: HTMLCanvasElement;
  }

  render() {
    return (
      <div  style={{ width: '100%', height: '100%', display: 'inline-flex', overflow: 'hidden' }}>
        <div className="daZhuanKuai" id="daZhuanKuai" style={{ margin: 'auto' }}>
          <canvas ref="canvas" id="canvas" width="800" height="560"></canvas>
        </div>
      </div>
    );
  }

}