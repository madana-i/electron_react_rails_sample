import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveNote } from '../actions/Index';

import Editor from '../components/Editor.jsx';
import Preview from '../components/Preview.jsx';
import style from './BodyContainer.scss';

class BodyContainer extends Component{
  constructor(){
    super();
    this.state = {
      content: ''
    }
  }

  componentWillReceiveProps(props){
    const content = props.currentNote.content;

    this.setState({
      content: content,
    });
  }

  onEdit(content){
    this.setState({
      content: content,
    });
  }

  onSave(content){
    const item = this.props.currentNote.set('content', content);
    this.props.saveNote(item);
  }

  render(){
    return(
      <div className={style.container}>
        <div className={style.left}>
          <Editor
            data={this.state.content}
            onEdit={this.onEdit.bind(this)}
            onSave={this.onSave.bind(this)}
          />
        </div>
        <div className={style.right}>
          <Preview
            data={this.state.content}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentNote: state.currentNote,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveNote,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BodyContainer);
