import {
    EDIT_NEW_NOTE,
    SAVE_NEW_NOTE,
  } from '../const/actionTypes';

export function saveNewNote() {
    return {
        type: SAVE_NEW_NOTE,
    }
};

export function editNewNote(note) {
    return {
        type: EDIT_NEW_NOTE,
        note
    }
};