import {
  EDIT_NEW_NOTE,
  SAVE_NEW_NOTE,
} from '../const/actionTypes';

export function notes(state={
  notes:[],
  newNote: {
    content: "",
    checked: false
  },
}, action) {
  switch(action.type){
    // TODO, Add clear newNote action.
    case SAVE_NEW_NOTE:
      return Object.assign({}, state, {
        notes: [...state.notes, state.newNote],
        newNote: {
          content:"",
          checked: false
        }
      })
    case EDIT_NEW_NOTE:
      return Object.assign({}, state, {
        newNote: {
          ...state.newNote,
          ... action.note
        }
      })
    default:
      return state;
  }
};