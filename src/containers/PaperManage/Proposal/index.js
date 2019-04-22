import React, { Component } from 'react'
import NewContainerLayout from 'components/NewContainerLayout'
import { Row, Col, Input, Table, Select, Button, Tag, Divider} from 'antd'

import { getProposalListData } from './actions'

export default class Proposal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      submit_type : '',
      is_viewd: '',
      time_begin: '',
      time_end: '',
      list_data: {}
    }
  }

  componentDidMount() {
    const {title, submit_type, is_viewd, time_begin, time_end} = this.state;
    // this.setState({
    //   list_data: getProposalListData({title, submit_type, is_viewd, time_begin, time_end})
    // })
  }

  render() {

    const {list_data} = this.state

    const dataSource = [
      {
        key: '1',
        name: '林奇',
        title: '基于Java的图书管理系统',
        submit_type: 1,
        is_viewd: 1,
        teacher: '林丽丽',
      },
      {
        key: '2',
        name: '林奇',
        title: '基于Java的图书管理系统',
        submit_type: 1,
        is_viewd: 0,
        teacher: '林丽丽',
      },
      {
        key: '3',
        name: '林奇',
        title: '基于Java的图书管理系统',
        submit_type: 0,
        is_viewd: 1,
        teacher: '林丽丽',
      },
      {
        key: '4',
        name: '林奇',
        title: '基于Java的图书管理系统',
        submit_type: 1,
        is_viewd: 0,
        teacher: '林丽丽',
      },
    ];
    
    const columns = [
      {title: '姓名',dataIndex: 'name',key: 'name'}, 
      {title: '题目',dataIndex: 'title',key: 'title'},
      {title: '提交方式',dataIndex: 'submit_type',key: 'submit_type', render: (t,r)=> <span>{r.submit_type === 1? '表单填写': '文件上传'}</span>},
      {title: '是否批阅',dataIndex: 'is_viewd',key: 'is_viewd',render: (t,r)=> r.submit_type === 1?<Tag color="green">已批阅</Tag>:<Tag color="red">未批阅</Tag>},
      {title: '批阅老师',dataIndex: 'teacher',key: 'teacher'},
      {title: '创建时间',dataIndex: 'time',key: 'time'},
      {title: '操作',dataIndex: 'action',key: 'action',render: (text, record) => (
        <span>
          <a href="javascript:;">详情</a>
          <Divider type="vertical" />
          <a href="javascript:;">下载</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      ),},
  ];

    return (
      <NewContainerLayout>
        <Row style={{marginBottom: 20}}>
          <Col span={6}>
            <div style={{ display: 'inline-flex', width: '100%' }}>
                <span className='span-style'>论文题目:</span>
                <Input placeholder='请输入题目' style={{marginLeft:10}} value={this.state.title} onChange={(e)=>this.setState({job_code:e.target.value})}/>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ display: 'inline-flex', width: '100%' }}>
              <span className='span-style'>提交方式</span>
              <Select style={{marginLeft:10,width:'70%'}} value={this.state.submit_type} onChange={(value)=>this.setState({submit_type:value})}>
                <Select.Option value="">全部</Select.Option>
                <Select.Option value="1">手动填写</Select.Option>
                <Select.Option value="0">表单填写</Select.Option>
              </Select>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ display: 'inline-flex', width: '100%' }}>
              <span className='span-style'>是否批阅</span>
              <Select style={{marginLeft:10,width:'70%'}} value={this.state.is_viewd} onChange={(value)=>this.setState({is_viewd:value})}>
                <Select.Option value="">全部</Select.Option>
                <Select.Option value="1">是</Select.Option>
                <Select.Option value="0">否</Select.Option>
              </Select>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ display: 'inline-flex', width: '100%' }}>
              <span className='span-style'>选择日期:</span>
              <Input placeholder='请输入题目' style={{marginLeft:10}} value={this.state.title} onChange={(e)=>this.setState({job_code:e.target.value})}/>
            </div>
          </Col>
        </Row>
        <Row style={{marginBottom: 20}}>
          <Col span={6} offset={18}>
            <div style={{ display: 'inline-flex', width: '100%', justifyContent:'flex-end'}}>
              <Button type="primary" icon="search" style={{marginRight:20 }}>搜索</Button>
              <Button icon="plus">新增</Button>
            </div>
          </Col>
        </Row>
        <Table 
          dataSource={dataSource} 
          columns={columns} 
          loading={!list_data}
        />
      </NewContainerLayout>
    )
  }
}
