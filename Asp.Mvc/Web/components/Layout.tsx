import * as React from 'react';
import { TopNav } from './topNav';

export interface LayoutProps {
  body: React.ReactElement<any>;
}

export class Layout extends React.Component<LayoutProps, void> {
  public render() {
    return (
      <div className="layout scroll-1" style={{ width: '100%', height: '100%', position: 'absolute', overflow: 'auto'}}>
        <TopNav ref="topNav" />
        {this.props.body}
      </div>
    );
  }
}
