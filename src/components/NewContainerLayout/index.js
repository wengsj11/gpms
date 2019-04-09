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
      nowHeight: window.innerHeight - 80,
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
      '/PaperManage/Proposal/Detail': '开题报告详情',
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
        <Row>
          <Col span={22}>
            <Breadcrumb style={{fontSize:14,marginTop:10,marginBottom:10}} separator=">">
              {breadcrumbItems}                                                    
            </Breadcrumb>
          </Col>
          <Col className={this.props.history.length > 1 ? 'col-xs-2 text-right':'display-none'}>
            <Button style={{marginTop:5}} onClick={this.callBack} icon="rollback">返回</Button>
          </Col>
        </Row>
        <Card className='card-bg' style={{height:this.state.nowHeight,overflow:'auto'}}>{this.props.children}</Card>
      </div>
    )
  }
}

export default withRouter(NewContainerLayout)
