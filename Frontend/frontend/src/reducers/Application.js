import { Record } from 'immutable';
import _ from 'underscore';

import IndexActions from '../actions/index';

const ApplicationState = Record({
  isEditing: false,
});

export function applicationState(state = new ApplicationState(), action){
  switch(action.type) {
    case IndexActions.TOGGLE_EDIT: {
      return state.set('isEditing', !state.isEditing);
    }
    default: {
      break;
    }
  }
  return state;
}
