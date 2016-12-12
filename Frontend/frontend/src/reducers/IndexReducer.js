import { combineReducers } from 'redux';

import { noteList, currentNote } from './Note';
import { applicationState } from './Application';


export default combineReducers({
  noteList,
  currentNote,
  applicationState,
});
