import React, { Component } from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import routes from './routes'

import './index.css';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

export default class MainLayout extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {

    const routesSwitch = routes.map(m => {
      return m.isWrong ? (<Route path={m.path} component={m.component} key={m.path} />) : (
        <Route exact path={m.path} component={m.component} key={m.path} />
      );
    });

    return (
     <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          style={{
            height: '100vh',backgroundColor:'#fff'
          }}
        >
          <div className="logo" >
            <img alt="" src="/logo_school.png" style={{width:'100%',height:'100%'}}/>
          </div>
          <Menu mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="0">
                <Link to="/">
                  <Icon type="home" />
                  <span>首页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/profile">
                  <Icon type="user" />
                  <span>个人中心</span>
                </Link>
              </Menu.Item>
            {/* <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item> */}
            <SubMenu key="sub3" title={<span><Icon type="form" /><span>论文管理</span></span>}>
              <Menu.Item key="9">
                <Link to="/PaperManage/Proposal/Index">
                  开题报告
                </Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/PaperManage/MidTermExam/Index">
                  中期检查
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item> */}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            {/* <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> */}
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            <Switch >
              {routesSwitch}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
