import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ipcRenderer from './lib/ipcRenderer';

import RootContainer from './containers/RootContainer.jsx'
import configureStore from './store/configureStore';

import 'babel-core/register';
import 'babel-polyfill';

const store = configureStore();

ipcRenderer.on('dispatch', (e, action) => {
  store.dispatch(action);
});

render(
  <RootContainer store={store} />,
  document.getElementById('root')
);
