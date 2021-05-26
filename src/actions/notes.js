import {
    EDIT_NEW_NOTE,
  } from '../const/actionTypes';
  
export function editNewNote(note) {
    return {
        type: EDIT_NEW_NOTE,
        note
    }
};