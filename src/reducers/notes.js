import {
  SAVE_NEW_NOTE,
  EDIT_NEW_NOTE,
  CLEAR_NEW_NOTE,
} from '../const/actionTypes';

export function notes(state={
  notes:[],
  newNote: {
    content: "",
    checked: false
  },
}, action) {
  switch(action.type){
    case SAVE_NEW_NOTE:
      return Object.assign({}, state, {
        notes: [...state.notes, state.newNote]
      })
    case EDIT_NEW_NOTE:
      return Object.assign({}, state, {
        newNote: {
          ...state.newNote,
          ... action.note
        }
      })
    case CLEAR_NEW_NOTE:
      return Object.assign({}, state, {
        newNote: {
          content:"",
          checked: false
        }
      })
    default:
      return state;
  }
};