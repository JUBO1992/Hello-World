import * as React from "react";
import {TopNav} from "../common/navigation"
import {Footer} from "../common/footer"
import {Carousel} from "./carousel"
import {Features} from "./features"

export interface HomeProps {}

export class Home extends React.Component<HomeProps, {}> {

  render() {
    return (
      <div className="home">
        <TopNav/>
      {/** 
        <Carousel/>
      */}
        <Features/>
        <Footer/>
      </div>
    );
  }
}