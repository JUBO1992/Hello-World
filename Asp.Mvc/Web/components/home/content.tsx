import "./styles/content.less";
import * as React from "react";

export class Content extends React.Component<{}, {}>{

  render(){
    return(
      <div>

        <div id="pane-what-can-you-make" className="pane bg-neutral-11" style={{padding: 15}}>
          <div className="container pvxxl">
            <h2 className="em-low mbxl txt-c">What can you make with 300,000 building blocks?</h2>
            <p className="txt-c">The npm registry hosts over a quarter million packages of reusable code — the largest code registry in the world.</p>
            <div className="row">
              <div className="col-md-2 col-md-offset-2 txt-c paxl">
                <img src={require<string>("./imgs/binoculars-dot.svg")}/>
                <h3 className="h4 em-medium">Find</h3>
                <p>
                  Popular libraries like JQuery, Bootstrap, React, and Angular, and components from frameworks including Polymer.
                </p>
              </div>
              <div className="col-md-2 col-md-offset-1 txt-c paxl">
                <img src={require<string>("./imgs/mountain-dot.svg")}/>
                <h3 className="h4 em-medium">Discover</h3>
                <p>
                  Packages for mobile, IoT, front end, back end, robotics… everything you need to start building amazing things.
                </p>
              </div>
              <div className="col-md-2 col-md-offset-1 txt-c paxl">
                <img src={require<string>("./imgs/rucksack-dot.svg")}/>
                <h3 className="h4 em-medium">Build</h3>
                <p>
                  Assemble packages like building blocks to quickly develop awesome new projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pane bg-npm-navy-1" id="enterprise-homepage-pane" style={{backgroundColor: '#273547', padding: 15}}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-1">
                <img className="img-responsive center-block" src={require<string>("./imgs/npm-enterprise.svg")} alt="good businesses scale"/>
              </div>
              <div className="col-md-5 col-md-offset-1">
                <div className="visible-lg-block mtxxl ptxxl"></div>
                <div className="visible-md-block mtxxl"></div>
                <div className="visible-xs-block mtxxl ptxl"></div>
                <h2 className="mtn em-low type-neutral-11">Take your enterprise to new heights</h2>
                <p className="em-default type-neutral-11 mbxl">Harness the power of npm inside large teams. Host your own private npm registry and securely integrate with your workflow and tools.</p>
                <a href="/" className="btn btn-highlight-1" data-event-name="homepage-enterprise-learn-npme">Start an enterprise trial</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pane"  style={{padding: 15}}>
          <div className="container">
            <div className="row">
              <div className="col-md-5  col-md-offset-1">
                <div className="visible-lg-block mtxxl ptxxl"></div>
                <div className="visible-md-block mtxxl"></div>
                <div className="visible-xs-block mtxxl ptxl"></div>
                <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-4 col-md-offset-1">
                <img className="featurette-image img-responsive center-block" src={require<string>("./imgs/content1.png")} alt="Generic placeholder image"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="pane" style={{backgroundColor:'#206F9C', padding: 15}}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-1">
                <img className="featurette-image img-responsive center-block" src={require<string>("./imgs/content2.png")} alt="Generic placeholder image"></img>
              </div>
              <div className="col-md-5  col-md-offset-1">
                <div className="visible-lg-block mtxxl ptxxl"></div>
                <div className="visible-md-block mtxxl"></div>
                <div className="visible-xs-block mtxxl ptxl"></div>
                <h2 className="mtn em-low type-neutral-11">Oh yeah, it's that good. See for yourself.</h2>
                <p className="em-default type-neutral-11 mbxl">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}