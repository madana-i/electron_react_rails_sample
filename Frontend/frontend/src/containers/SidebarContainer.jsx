import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadNotes, selectNote, createNote, deleteNote } from '../actions/Index';

import style from './SidebarContainer.scss';
import Note from '../components/Note.jsx';

class Sidebar extends Component{
  componentDidMount(){
    this.loadInitialData();
  }

  async loadInitialData(){
    this.props.loadNotes();
  }

  selectNote(item){
    this.props.selectNote(item);
  }

  createNote(){
    this.props.createNote();
  }

  deleteNote(item){
    this.props.deleteNote(item);
  }

  render(){
    const { noteList, applicationState } = this.props;

    return(
      <div className={style.container}>
        <h3 className={style.heading}>Notes</h3>
        <ul className={style.contents}>
          <li onClick={this.createNote.bind(this)}>New</li>
          { noteList.map((item) => {
            return(
              <Note
                key={item.id}
                data={item}
                selectNote={this.selectNote.bind(this)}
                deleteNote={this.deleteNote.bind(this)}
                applicationState={applicationState}
              />
            )
          }) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    noteList: state.noteList,
    applicationState: state.applicationState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadNotes,
    selectNote,
    createNote,
    deleteNote,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
