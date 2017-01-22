import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import Login from './app/components/Login';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';

import 'todomvc-app-css/index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/login" component={Login}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
