import React, { Component } from 'react'
import {
  Link, withRouter,
} from 'react-router-dom';
import { Breadcrumb, Row, Col, Button, Card } from 'antd';
import './index.css'

class NewContainerLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nowHeight: window.innerHeight - 64 - 51,
    }
  }

  callBack = () =>{
    this.props.history.go(-1);
  }

  render() {
    const { location } = this.props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const breadcrumbNameMap = {
      '/profile': '个人中心',
      '/PaperManage': '论文管理',
      '/PaperManage/Proposal': '开题报告',
      '/PaperManage/Proposal/Index': '开题报告列表',
      '/PaperManage/Proposal/Create': '开题报告创建',
      '/PaperManage/MidTermExam': '中期检查',
      '/PaperManage/MidTermExam/Index': '中期检查列表',
      '/PaperManage/MidTermExam/Detail': '中期检查详情',
    };
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {breadcrumbNameMap[url]}
          </Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <Link to="/">首页</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);

    return (
      <div>
        <Row style={{backgroundColor: '#fafafa',padding: 5}}>
          <Col span={22}>
            <Breadcrumb style={{fontSize:14,marginTop:10,marginBottom:10,marginLeft: 10}} separator=">">
              {breadcrumbItems}                                                    
            </Breadcrumb>
          </Col>
          <Col className={this.props.history.length > 1 ? 'col-xs-2 text-right':'display-none'}>
            <Button style={{marginTop:5, marginRight: 10}} onClick={this.callBack} icon="rollback">返回</Button>
          </Col>
        </Row>
        <Card className='card-bg' bordered={false} style={{height:this.state.nowHeight,overflow:'auto',border: '1px solid #e8e8e8',backgroundColor: '#f0f2f5',padding:0}}>
          <div style={{backgroundColor: '#fff'}}>
            {this.props.children}
          </div>
        </Card>
      </div>
    )
  }
}

export default withRouter(NewContainerLayout)
