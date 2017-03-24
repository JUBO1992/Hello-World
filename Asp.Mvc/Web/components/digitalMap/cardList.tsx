import * as React from "react";
import * as ReactDOM from "react-dom";
import { Table, Card } from 'antd';

export interface CardListProps {
  viewData?: (id: string) => void;// 查看数据
  data: any[];
  header: string;
  idField: string;
  pageSize?: number;// 默认为10
}
export interface CardListState {
  dataSource?: any[];
  columns?: any[];
  total?: number;
  pageNo?: number;
}

/**
 * 自定义Card列表
 */
export class CardList extends React.Component<CardListProps, CardListState>{
  tempkey: number = 0;
  constructor(props: CardListProps, state: CardListState) {
    super(props);
    let columns = [{
      title: this.props.header,
      dataIndex: 'info',
      key: 'info',
    }, {
      title: '',
      key: 'action',
      width: 80,
      render: (text, record) => (
        <span>
          <a onClick={this.viewData.bind(this, record)}>查看数据</a>
        </span>
      ),
    }];
    this.state = {
      dataSource: [],
      columns: columns,
      total: 0,
      pageNo: 1,
    };
  }

  initData() {
    let data = this.props.data, temp = [];
    for (let d in data) {
      temp.push({
        info:
        <div id={data[d][this.props.idField]} style={{ margin: '-10px 0px -10px 10px', color: '#333' }}>
          {this.itemInfo(data[d])}
        </div>,
        id: data[d][this.props.idField],
        key: parseInt(d),
      });
    }
    this.setState({ dataSource: temp, total: temp.length, });
  }

  itemInfo(obj) {
    let plist = [];
    for (let i in obj) {
      // plist.push(<p style={{ fontSize: 12, margin: '2px 0px' }}>{obj[i]}</p>);// p标签不继承父标签color属性
      plist.push(<span style={{ fontSize: 12, lineHeight: '20px' }}>{obj[i]}<br /></span>);// span标签继承父标签color属性
    }
    return plist;
  }

  componentDidMount() {
    this.initData();
  }

  componentWillReceiveProps(nextProps: CardListProps) {
    if (this.props !== nextProps) {
      this.props = nextProps;
      this.initData();
    }
  }

  viewData(record) {
    this.markSelect(record.key);
    if (this.props.viewData) {
      this.props.viewData(record.id);
    }
  }

  markSelect(key) {
    if (this.tempkey >= 0) {
      let divId = this.state.dataSource[this.tempkey].id;
      if (document.getElementById(divId)) {
        document.getElementById(divId).style.color = "#333";
      }
    }
    if (key >= 0) {
      let divId = this.state.dataSource[key].id;
      if (document.getElementById(divId)) {
        document.getElementById(divId).style.color = "blue";
      }
    }
    this.tempkey = key;
  }

  handlePageChange(e) {
    this.state.pageNo = e;
    this.initData();
    this.markSelect(this.tempkey);
  }

  refs: {
    [key: string]: any;
    cardListDiv: HTMLDivElement;
  }

  render() {
    const pagination = {
      pageSize: this.props.pageSize ? this.props.pageSize : 10,
      total: this.state.total,
      onChange: this.handlePageChange.bind(this),
      current: this.state.pageNo,
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