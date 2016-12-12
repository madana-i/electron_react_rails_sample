import React, { Component } from 'react';
import render from 'react-dom';
import { Provider } from 'react-redux';

import SidebarContainer from './SidebarContainer.jsx';
import BodyContainer from './BodyContainer.jsx';

class Root extends Component {
  render(){
    return(
      <div>
        <SidebarContainer />
        <BodyContainer />
      </div>
    );
  }
}

const RootContainer = ({ store }) => (
  <Provider store={store}>
    <Root />
  </Provider>
)

export default RootContainer;
