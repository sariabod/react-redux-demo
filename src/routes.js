import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import MainLayout from './components/common/MainLayout';
import toastr from 'toastr';

export default function configRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
  );
}
