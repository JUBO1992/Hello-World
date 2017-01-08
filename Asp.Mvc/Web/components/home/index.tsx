import "./styles/home.less";

import * as React from "react";
import {Footer} from "../footer"
import {CustomCarousel} from "./carousel"
import {Content} from "./content"


export class Home extends React.Component<{}, {}> {

  render() {
    return (
      <div className="home">
        <CustomCarousel/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}