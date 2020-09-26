import {
  SHOW_MODAL,
} from '../const/actionTypes';

export function ux(state={
	showApp: true,
	modal: {
		newNote: false
	}
}, action) {
  switch(action.type){
  	case SHOW_MODAL:
  	  return Object.assign({}, state, {
  	  	modal: Object.assign({}, state.modal, {
  	    	...action.modal,
  	  	})
  		})
    default:
      return state;
  }
};