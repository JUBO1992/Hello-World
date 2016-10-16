import * as React from "react";

import contentStyle=require("xstyle/css!./styles/content.css");

export class Content extends React.Component<{}, {}>{

  static contentStyle = contentStyle;

  render(){
    return(
      <div>
        <div class="pane bg-npm-navy-1" id="enterprise-homepage-pane" style={{backgroundColor:'#206F9C'}}>
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <img class="img-responsive center-block" src="home/imgs/npm-enterprise.svg" alt="good businesses scale"/>
              </div>
              <div class="col-md-7">
                <div class="visible-lg-block mtxxl ptxxl"></div>
                <div class="visible-md-block mtxxl"></div>
                <div class="visible-xs-block mtxxl ptxl"></div>
                <h2 class="mtn em-low type-neutral-11">Take your enterprise to new heights</h2>
                <p class="em-default type-neutral-11 mbxl">Harness the power of npm inside large teams. Host your own private npm registry and securely integrate with your workflow and tools.</p>
                <a href="/" class="btn btn-highlight-1" data-event-name="homepage-enterprise-learn-npme">Start an enterprise trial</a>
              </div>
            </div>
          </div>
        </div>

        <div id="pane-what-can-you-make" class="pane bg-neutral-11">
          <div class="container pvxxl">
            <h2 class="em-low mbxl txt-c">What can you make with 300,000 building blocks?</h2>
            <p class="txt-c">The npm registry hosts over a quarter million packages of reusable code — the largest code registry in the world.</p>
            <div class="row">
              <div class="col-xs-16 col-xs-offset-4 col-md-6 col-md-offset-1 txt-c paxl">
                <img src="home/imgs/binoculars-dot.svg"/>
                <h3 class="h4 em-medium">Find</h3>
                <p>
                  Popular libraries like JQuery, Bootstrap, React, and Angular, and components from frameworks including Polymer.
                </p>
              </div>
              <div class="col-xs-16 col-xs-offset-4 col-md-6 col-md-offset-2 txt-c paxl">
                <img src="home/imgs/mountain-dot.svg"/>
                <h3 class="h4 em-medium">Discover</h3>
                <p>
                  Packages for mobile, IoT, front end, back end, robotics… everything you need to start building amazing things.
                </p>
              </div>
              <div class="col-xs-16 col-xs-offset-4 col-md-6 col-md-offset-2 txt-c paxl">
                <img src="home/imgs/rucksack-dot.svg"/>
                <h3 class="h4 em-medium">Build</h3>
                <p>
                  Assemble packages like building blocks to quickly develop awesome new projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:'#206F9C'}}>
          <div className="container">
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5" style={{marginTop:20,marginBottom:20}}>
              <img className="featurette-image img-responsive center-block" src="home/imgs/content1.png" alt="Generic placeholder image"></img>
            </div>
          </div>
        </div>

      <div className="container">
        <div className="col-md-7 col-md-push-5">
          <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5 col-md-pull-7" style={{marginTop:20,marginBottom:20}}>
          <img className="featurette-image img-responsive center-block" src="home/imgs/content1.png" alt="Generic placeholder image"></img>
        </div>
      </div>

      <div style={{backgroundColor:'#c4c4c4'}}>
        <div className="container">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5" style={{marginTop:20,marginBottom:20}}>
            <img className="featurette-image img-responsive center-block" src="home/imgs/content1.png" alt="Generic placeholder image"></img>
          </div>
        </div>
      </div>

      </div>
    );
  }
}