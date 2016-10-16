import * as React from "react";
import {TopNav} from "../common/topNav"
import {Footer} from "../common/footer"
import {CustomCarousel} from "./carousel"
import {Content} from "./content"

import homeStyle=require("xstyle/css!./styles/home.css");

export class Home extends React.Component<{}, {}> {

  static homeStyle= homeStyle;

  render() {
    return (
      <div className="home">
        <div className="homeTop">
          <TopNav/>
        </div>
        <div className=" homeContent scroll-1">
          <CustomCarousel/>
          <Content/>
          <Footer/>
        </div>
      </div>
    );
  }
}