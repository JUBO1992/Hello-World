import * as React from "react";

export class Features extends React.Component<{}, {}>{
  render(){
    return(
      <div>
        <div style={{backgroundColor:'#c4c4c4'}}>
          <div className="container">
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5" style={{marginTop:20,marginBottom:20}}>
              <img className="featurette-image img-responsive center-block" src="components/home/imgs/content1.png" alt="Generic placeholder image"></img>
            </div>
          </div>
        </div>

      <div className="container">
        <div className="col-md-7 col-md-push-5">
          <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5 col-md-pull-7" style={{marginTop:20,marginBottom:20}}>
          <img className="featurette-image img-responsive center-block" src="components/home/imgs/content1.png" alt="Generic placeholder image"></img>
        </div>
      </div>

      <div style={{backgroundColor:'#c4c4c4'}}>
        <div className="container">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5" style={{marginTop:20,marginBottom:20}}>
            <img className="featurette-image img-responsive center-block" src="components/home/imgs/content1.png" alt="Generic placeholder image"></img>
          </div>
        </div>
      </div>

      </div>
    );
  }
}