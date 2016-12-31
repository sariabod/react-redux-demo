/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configRoutes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import '../node_modules/toastr/build/toastr.min.css';

render(
  <Router history={browserHistory}>{configRoutes()}</Router>,
  document.getElementById('app')
);
