import * as React from "react";


import footerStyle = require('xstyle/css!./styles/footer.css');

export class Footer extends React.Component<{}, {}>{

  static footerStyle = footerStyle;

  render() {
    return (
      <footer className="pane bg-npm-navy-1">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="h4 type-npm-pastel-3">You Need Help</h3>
              <hr className="divider-1"/>
              <ul className="list-unstyled h6 em-default">
                <li className="pbl"><a className="type-neutral-11" href="https://docs.npmjs.com">Documentation</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/support">Support / Contact Us</a></li>
                <li className="pbl"><a className="type-neutral-11" href="http://status.npmjs.org/">Registry Status</a></li>
                <li className="pbl"><a className="type-neutral-11" href="https://github.com/npm/www/issues">Website Issues</a></li>
                <li className="pbl"><a className="type-neutral-11" href="https://github.com/npm/npm/issues">CLI Issues</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/policies/security">Security</a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h3 className="h4 type-npm-pastel-3">About npm</h3>
              <hr className="divider-1"/>
              <ul className="list-unstyled h6 em-default">
                <li className="pbl"><a className="type-neutral-11" href="/about">About npm, Inc</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/jobs">Jobs</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/npm-weekly">npm Weekly</a></li>
                <li className="pbl"><a className="type-neutral-11" href="http://blog.npmjs.org">Blog</a></li>
                <li className="pbl"><a className="type-neutral-11" href="https://twitter.com/npmjs">Twitter</a></li>
                <li className="pbl"><a className="type-neutral-11" href="https://github.com/npm">GitHub</a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h3 className="h4 type-npm-pastel-3">Legal Stuff</h3>
              <hr className="divider-1"/>
              <ul className="list-unstyled h6 em-default">
                <li className="pbl"><a className="type-neutral-11" href="/policies/terms">Terms of Use</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/policies/conduct">Code of Conduct</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/policies/disputes">Package Name Disputes</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/policies/privacy">Privacy Policy</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/policies/receiving-reports">Reporting Abuse</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/policies/">Other policies</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="txt-c container">
          <a className="npm-loves-you type-neutral-11" href="/">
            npm loves you
          </a>
        </div>
      </footer>
    );
  }
}