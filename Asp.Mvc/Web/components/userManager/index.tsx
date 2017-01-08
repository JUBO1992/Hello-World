import * as React from "react";
import {Footer} from "../footer"

export interface UserManagerProps {
}
export interface UserManagerState {
}
export class UserManager extends React.Component<UserManagerProps, UserManagerState>{
  constructor() {
    super();
  }
  refs: {
    [key: string]: any;
  }

  render() {
    return (
      <div className="userManager">
        This is UserManager!
        <Footer />
      </div>
    );
  }

}