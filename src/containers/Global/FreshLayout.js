import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import MainLayout from './MainLayout'
import Login from '../Login';

export default function FreshLayout() {

  return (
    <div>
      <Switch >
        <Route exact path='/login' component={Login} />
        {/* <Route exact path='/assets/*' component={ScreenFrame} />
        <Route exact path='/qywechatAutoLogin' component={LoginQY} />
        <Route exact path='/notFond404' component={notFond404} />
        <Route exact path='/error500' component={error500} />
        <Route exact path='/Manage/aAccount/ForgetPassword' component={IFrameComponent} /> */}
        <Route path='/' component={MainLayout} />
      </Switch>
    </div>
  );

}