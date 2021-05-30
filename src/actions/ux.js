import {
  SHOW_MODAL,
} from '../const/actionTypes';

export function showModal(modal) {
  return {
    type: SHOW_MODAL,
    modal
  }
};