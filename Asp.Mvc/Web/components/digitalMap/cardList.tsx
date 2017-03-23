import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tabs, Input, Button, Table, Icon, Switch, Collapse, Card } from 'antd';

export interface CardListProps {
  viewData?: (params: Object) => void;// 查看数据
}
export interface CardListState {
  dataSource?: any[];
  columns?: any[];
  pageSize?: number;
  total?: number;
  pageNo?: number;
}

/**
 * 自定义Card列表
 */
export class CardList extends React.Component<CardListProps, CardListState>{
  constructor(props: CardListProps, state: CardListState) {
    super(props);
    let columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>查看数据</a>
        </span>
      ),
    }];
    let data =
      [{ name: 'aaa' },
      { name: 'bbb' },
      { name: 'ccc' },
      { name: 'ddd' },
      { name: 'eee' },
      { name: 'fff' },
      { name: 'bbb' },
      { name: 'bbb' },
      { name: 'bbb' },
      { name: 'bbb' }];
    this.state = {
      dataSource: data,
      columns: columns,
      total: 0,
      pageSize: 5,
      pageNo: 1,
    };
  }

  componentDidMount() {
  }

  handlePageChange(e) {
    this.state.pageNo = e;
  }

  refs: {
    [key: string]: any;
    cardListDiv: HTMLDivElement;
  }

  render() {
    const pagination = {
      total: this.state.total,
      pageSize: this.state.pageSize,
      // onChange: this.handlePageChange.bind(this),
      // current: this.state.pageNo,
    }
    return (
      <div>
        <div ref="cardListDiv">
          <Table columns={this.state.columns} dataSource={this.state.dataSource} pagination={pagination} size='small'/>
        </div>
      </div>
    );
  }
}