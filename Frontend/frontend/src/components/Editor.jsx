import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import ipcRenderer from '../lib/ipcRenderer';

import 'brace/mode/markdown';
import 'brace/theme/textmate';

export default class Editor extends Component{
  constructor(props){
    super(props);

    ipcRenderer.on('save', () => {
      this.onSave();
    });

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(content){
    this.props.onEdit(content);
  }

  onSave(){
    const content = this.props.data;
    this.props.onSave(content);
  }

  render(){
    const { data } = this.props;

    return(
      <AceEditor
        name="editor"
        mode="markdown"
        theme="textmate"
        width="100%"
        height="100%"
        tabSize={4}
        showGutter={false}
        showPrintMargin={false}
        highlightActiveLine={false}
        editorProps={{$blockScrolling: true}}
        onChange={this.onChange}
        value={data}
      />
    );
  }
}
