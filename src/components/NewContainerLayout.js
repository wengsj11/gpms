import React, { Component } from 'react'
import {
  Link, withRouter,
} from 'react-router-dom';
import { Breadcrumb } from 'antd';

class NewContainerLayout extends Component {
  render() {
    const { location } = this.props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const breadcrumbNameMap = {
      '/profile': '个人中心',
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
        <Breadcrumb>
          {breadcrumbItems}
        </Breadcrumb>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default withRouter(NewContainerLayout)
