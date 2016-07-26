/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";

import {Home} from "./home/home";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
    </Router>
),document.getElementById("app"));