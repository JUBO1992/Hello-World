import * as React from "react";

export class Footer extends React.Component<{}, {}>{
  render(){
    return(
      <div className="container">
        <footer>
          <p className="pull-right"><a href="#">Back to top</a></p>
          <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
      </div>
    );
  }
}