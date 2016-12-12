import $ from 'jquery';

const Actions = {
  UPDATE_NOTES: 'index/update_notes',
  SELECT_NOTE: 'index/select_note',
  CREATE_NOTE: 'index/create_note',
  TOGGLE_EDIT: 'index/toggle_edit',
};
const host = 'http://localhost:3000';

export default Actions;

export function loadNotes(){
  return async(dispatch) => {
    const res = await loadNotesAjax();

    dispatch(updateNotes(res.notes));
  }
}

async function loadNotesAjax(){
  return await $.ajax({
    url: `${host}/notes`,
    method: 'GET',
  });
}

export function saveNote(item){
  return async(dispatch) => {
    const res = await saveNoteAjax(item);

    dispatch(updateNotes(res.notes));
    dispatch(selectNote(res.note));
  }
}

async function saveNoteAjax(item){
  const method = item.id ? 'PUT' : 'POST';
  const url = `${host}/notes/${item.id ? item.id : '' }`;

  return await $.ajax({
    url: url,
    method: method,
    data: item.toJS(),
  });
}

function updateNotes(items){
  return (dispatch) => {
    dispatch({
      type: Actions.UPDATE_NOTES,
      items: items,
    });
  }
}

export function selectNote(item){
  return (dispatch) => {
    dispatch({
      type: Actions.SELECT_NOTE,
      item: item,
    });
  }
}

export function createNote(){
  return (dispatch) => {
    dispatch({
      type: Actions.CREATE_NOTE,
    });
  }
}

export function deleteNote(item){
  return async(dispatch) => {
    const res = await deleteNoteAjax(item);

    dispatch(updateNotes(res.notes));
    dispatch(createNote());
  }
}

async function deleteNoteAjax(item){
  return await $.ajax({
    url: `${host}/notes/${item.id}`,
    method: 'DELETE',
  });
}
