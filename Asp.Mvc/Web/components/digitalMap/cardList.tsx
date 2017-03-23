import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tabs, Input, Button, Table, Icon, Switch, Collapse, Card } from 'antd';

export interface CardListProps {
  viewData?: (record: Object) => void;// 查看数据
  dataSource?: any[];
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
      title: '土地承包方信息列表',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '',
      key: 'action',
      width: 70,
      render: (text, record) => (
        <span>
          <a onClick={this.viewData.bind(this, record)}>查看数据</a>
        </span>
      ),
    }];
    let data =
      [{ name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p>, id: '1234567890' },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> },
      { name: <p style={{ fontSize: '12px', margin: '-5px 5px' }}>姓名：巨擘<br />身份证：62272219920613101X</p> }
      ];
    this.state = {
      dataSource: data,
      columns: columns,
      total: data.length,
      pageSize: 9,
      pageNo: 1,
    };
  }

  componentDidMount() {
  }

  viewData(record) {
    alert(record.name);
  }

  refs: {
    [key: string]: any;
    cardListDiv: HTMLDivElement;
  }

  render() {
    const pagination = {
      total: this.state.total,
      pageSize: this.state.pageSize,
      simple: true,
    }
    return (
      <div>
        <div ref="cardListDiv">
          <Table columns={this.state.columns}
            dataSource={this.state.dataSource}
            pagination={pagination} />
        </div>
      </div>
    );
  }
}