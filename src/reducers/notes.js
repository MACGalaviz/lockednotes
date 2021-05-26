import {
  EDIT_NEW_NOTE,
} from '../const/actionTypes';

export function notes(state={
  newNote: {
    content: ""
  }
}, action) {
  switch(action.type){
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