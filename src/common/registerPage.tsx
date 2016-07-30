import * as React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
//import {History} from 'history';

import loginPageStyle=require('xstyle/css!./styles/loginPage.css');

export interface RegisterPageProps { }

export interface RegisterPageState {
  loginID: string;
  password: string;
  isSubmitted: boolean;
 }

export class RegisterPage extends React.Component<RegisterPageProps, RegisterPageState>{ 
  
  static loginPageStyle = loginPageStyle;

  constructor(){
    super();
    this.state = {
      loginID: '',
      password: '',
      isSubmitted: false
    }
  }
  //mixins: [History],

  render() {

    return <div>
      <div className="login-page">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
            <img src="common/imgs/flat-avatar.png" className="user-avatar" />
            <h1>Ani Theme</h1>
            <br />
            <form role="form" onSubmit={this.register}>
              <Input type="text" className="form-control input-underline input-lg" id="" placeholder='Full Name' />
              <Input type="text" className="form-control input-underline input-lg" id="" placeholder='Email' />
              <Input type="password" className="form-control input-underline input-lg" id="" placeholder='Password' />
              <Input type="password" className="form-control input-underline input-lg" id="" placeholder='Repeat Password' />
              <br /><br />
              <Button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded progress-login" >Register</Button>
              <Link to="/login"><Button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded" >Login Page</Button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  }

  register(e) {
    e.preventDefault();
    //this.props.history.pushState(null, '/dashboard/home');
    return false;
  }

}