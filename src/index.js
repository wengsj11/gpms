import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FreshLayout from './containers/Global/FreshLayout'

//引入路由
import {
  BrowserRouter as Router,
} from 'react-router-dom';

ReactDOM.render((
  <Router>
    <FreshLayout />
  </Router>
), document.getElementById('root'));
