/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";

import {Home} from "./home/home";
import {DigitalMap} from "./digitalMap/DigitalMap";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/digitalMap" component={DigitalMap}/>
    </Router>
),document.getElementById("app"));