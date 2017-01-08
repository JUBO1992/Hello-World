import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/digitalMap' getComponents={(nextState, cb) => {
      require.ensure(['./components/digitalMap'], (require) => {
        let digitalMap = require<any>('./components/digitalMap');
        cb(null, { body: digitalMap.DigitalMap });
      });
    } } />
    <Route path='/digitalAtlas' getComponents={(nextState, cb) => {
      require.ensure(['./components/digitalAtlas'], (require) => {
        let digitalAtlas = require<any>('./components/digitalAtlas');
        cb(null, { body: digitalAtlas.DigitalAtlas });
      });
    } } />
    <Route path='/threeDMap' getComponents={(nextState, cb) => {
      require.ensure(['./components/threeDMap'], (require) => {
        let threeDMap = require<any>('./components/threeDMap');
        cb(null, { body: threeDMap.ThreeDMap });
      });
    } } />
    <Route path='/resourceCenter' getComponents={(nextState, cb) => {
      require.ensure(['./components/resourceCenter'], (require) => {
        let resourceCenter = require<any>('./components/resourceCenter');
        cb(null, { body: resourceCenter.ResourceCenter });
      });
    } } />
    <Route path='/developApi' getComponents={(nextState, cb) => {
      require.ensure(['./components/developApi'], (require) => {
        let developApi = require<any>('./components/developApi');
        cb(null, { body: developApi.DevelopApi });
      });
    } } />
    <Route path='/helpCenter' getComponents={(nextState, cb) => {
      require.ensure(['./components/helpCenter'], (require) => {
        let helpCenter = require<any>('./components/helpCenter');
        cb(null, { body: helpCenter.HelpCenter });
      });
    } } />
    <Route path='/userManager' getComponents={(nextState, cb) => {
      require.ensure(['./components/userManager'], (require) => {
        let userManager = require<any>('./components/userManager');
        cb(null, { body: userManager.UserManager });
      });
    } } />
</Route>;

// Allow Hot Module Reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
