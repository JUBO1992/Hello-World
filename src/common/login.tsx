import * as React from 'react';
import { Router, Link } from 'react-router';
import { Table, Icon, Button, Input, Modal } from "antd";
import { ControlLabel, FormControl, FormGroup, HelpBlock } from "react-bootstrap";

export interface LoginProps { }
export interface LoginState { 
  showlogin: boolean;
  validateStates?: any;
}
export class Login extends React.Component<LoginProps, LoginState>{

  constructor(props: LoginProps, state: LoginState) {
    super(props);
    this.state = {
      showlogin: false,
      validateStates: {}
    }
  }

  private handleOk(){}
  private handleCancel(){
    this.setState({
      showlogin: false,
    });
  }
  private handleBlur(event: any) {}
  private handleChange(event: any) {}

  public showLogin() {
    this.setState({
      showlogin: true
    });
  }

  render() {
    return (
      <div>
        <div>
          <Modal title="欢迎登录后台管理" visible={this.state.showlogin}
            onOk={this.handleOk.bind(this) } onCancel={this.handleCancel.bind(this) }>
            <form>
              <FormGroup validationState={this.state.validateStates["userName"]}>
                <ControlLabel>用户名</ControlLabel>
                <FormControl type="text" name="userName"  onBlur={this.handleBlur.bind(this) } onChange={this.handleChange.bind(this) } />
                <FormControl.Feedback />
                <HelpBlock></HelpBlock>
              </FormGroup>
              <FormGroup validationState={this.state.validateStates["password"]}>
                <ControlLabel>密码</ControlLabel>
                <FormControl type="password" name="password"  onBlur={this.handleBlur.bind(this) } onChange={this.handleChange.bind(this) } />
                <FormControl.Feedback />
                <HelpBlock></HelpBlock>
              </FormGroup>
            </form>
          </Modal>
        </div>
      </div>
    )
  }
}
