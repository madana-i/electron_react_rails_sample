import React, { Component } from 'react';
import style from './Note.scss';

export default class Note extends Component{
  constructor(props){
    super(props);

    this.selectNote = this.selectNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  selectNote(item){
    this.props.selectNote(item);
  }

  deleteNote(item){
    this.props.deleteNote(item);
  }

  render(){
    const { data, applicationState } = this.props;

    return(
      <li onClick={() => this.selectNote(data)}>
        {data.name}
        { applicationState.isEditing ?
          <i
            className={style.delete}
            onClick={() => this.deleteNote(data)}
          >×</i> : ''
        }
      </li>
    );
  }
}
