/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";

import {Home} from "./home/home";
import {LoginPage} from "./common/loginPage";
import {RegisterPage} from "./common/registerPage";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/loginPage" component={LoginPage}/>
        <Route path="/registerPage" component={RegisterPage}/>
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