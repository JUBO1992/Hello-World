import './styles/footer.less';
import * as React from "react";

export class Footer extends React.Component<{}, {}>{

  render() {
    return (
      <footer className="pane bg-npm-navy-1" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <div className="container" style={{paddingTop: 30, paddingBottom: 15}}>
          <div className="row">
            <div className="col-md-2 col-md-offset-2">
              <h3 className="h4 type-npm-pastel-3">You Need Help</h3>
              <hr className="divider-1"/>
              <ul className="list-unstyled h6 em-default">
                <li className="pbl"><a className="type-neutral-11" href="https://docs.npmjs.com">Documentation</a></li>
                <li className="pbl"><a className="type-neutral-11" href="http://status.npmjs.org/">Registry Status</a></li>
                <li className="pbl"><a className="type-neutral-11" href="https://github.com/npm/www/issues">Website Issues</a></li>
              </ul>
            </div>

            <div className="col-md-2 col-md-offset-1">
              <h3 className="h4 type-npm-pastel-3">About npm</h3>
              <hr className="divider-1"/>
              <ul className="list-unstyled h6 em-default">
                <li className="pbl"><a className="type-neutral-11" href="http://blog.npmjs.org">Npmjs Blog</a></li>
                <li className="pbl"><a className="type-neutral-11" href="https://twitter.com/npmjs">Twitter.com</a></li>
                <li className="pbl"><a className="type-neutral-11" href="https://github.com/npm">GitHub.com</a></li>
              </ul>
            </div>

            <div className="col-md-2 col-md-offset-1">
              <h3 className="h4 type-npm-pastel-3">Legal Stuff</h3>
              <hr className="divider-1"/>
              <ul className="list-unstyled h6 em-default">
                <li className="pbl"><a className="type-neutral-11" href="/policies/conduct">Code of Conduct</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/policies/privacy">Privacy Policy</a></li>
                <li className="pbl"><a className="type-neutral-11" href="/policies/">Other policies</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="txt-c container" style={{paddingBottom: 30}}>
          <a className="npm-loves-you type-neutral-11" href="/">
            npm loves you
          </a>
        </div>
      </footer>
    );
  }
}