/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";

import {Home} from "./home/home";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/digitalMap" getComponent={(nextState, cb) => {
          require(["./digitalMap/digitalMap"], function (digitalMap: any) {
            cb(null, digitalMap.DigitalMap);
          });
        }}/>
        <Route path="/digitalAtlas" getComponent={(nextState, cb) => {
          require(["./digitalAtlas/digitalAtlas"], function (digitalAtlas: any) {
            cb(null, digitalAtlas.DigitalAtlas);
          });
        }}/>
    </Router>
),document.getElementById("app"));