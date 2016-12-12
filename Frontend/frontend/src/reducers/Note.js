import { Record, List } from 'immutable';
import _ from 'underscore';

import IndexActions from '../actions/Index';

const NoteRecord = Record({
  id: null,
  name: '',
  content: '',
});

function createNote(item){
  return new NoteRecord(_.extend({}, item, {
    id: item.id,
    name: item.name,
    content: item.content,
  }));
}

function createNotes(items){
  return new List(items.map(item => createNote(item)));
}

export function noteList(state = new List(), action){
  switch(action.type){
    case IndexActions.UPDATE_NOTES: {
      state = createNotes(action.items);
      break;
    }
    default: {
      break;
    }
  }
  return state;
}

export function currentNote(state = new NoteRecord(), action){
  switch(action.type) {
    case IndexActions.SELECT_NOTE: {
      const item = action.item;
      state = new NoteRecord(_.extend({}, item, {
        id: item.id,
        name: item.name,
        content: item.content,
      }));
      break;
    }
    case IndexActions.CREATE_NOTE: {
      state = new NoteRecord();
      break;
    }
    default: {
      break;
    }
  }
  return state;
}
