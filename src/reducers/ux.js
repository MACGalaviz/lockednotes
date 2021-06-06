import {
  SHOW_MODAL,
} from '../const/actionTypes';

export function ux(state={
  showApp: true,
  modal: {
    open: false,
    type: 'new'
  }
}, action) {
  switch(action.type){
    case SHOW_MODAL:
      return Object.assign({}, state, {
        modal: action.modal
      })
    default:
      return state;
  }
};