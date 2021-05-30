import {
  SAVE_NEW_NOTE,
  EDIT_NEW_NOTE,
  CLEAR_NEW_NOTE,
  SET_CURRENT_NOTE,
} from '../const/actionTypes';

export function saveNewNote() {
  return {
    type: SAVE_NEW_NOTE
  }
};

export function editNewNote(note) {
  return {
    type: EDIT_NEW_NOTE,
    note
  }
};

export function clearNewNote() {
  return {
    type: CLEAR_NEW_NOTE
  }
};

export function setCurrentNote(note) {
  return{
    type: SET_CURRENT_NOTE,
    note
  }
}