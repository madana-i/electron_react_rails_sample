import React, { Component } from 'react';
import marked  from 'marked';

export default class Preview extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { data } = this.props;

    return(
      <div id="preview">
        <div dangerouslySetInnerHTML={{__html: marked(data)}} />
      </div>
    );
  }
}

