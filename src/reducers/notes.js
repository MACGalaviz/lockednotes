import {
  LOAD_STORAGE,
  SAVE_NEW_NOTE,
  EDIT_NEW_NOTE,
  CLEAR_NEW_NOTE,
  SET_CURRENT_NOTE,
} from '../const/actionTypes';

export function notes(state={
  notes: [],
  newNote: {
    content: "",
    checked: false
  },
  currentNote: null
}, action) {
  switch(action.type){
    case LOAD_STORAGE:
      return Object.assign({}, state, {
        notes: action.notes
      })
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
    case SET_CURRENT_NOTE:
      return Object.assign({}, state, {
        currentNote: action.note
      })
    default:
      return state;
  }
};