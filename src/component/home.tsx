import * as React from "react";

export interface HomeProps {}

export class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <div>
        <h1>This is Home!!!</h1>
      </div>
    );
  }
}