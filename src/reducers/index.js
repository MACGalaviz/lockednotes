import { combineReducers } from 'redux'
import { controller } from './controller'
import { ux } from './ux'
import { notes } from './notes'

const appStore = combineReducers({
  controller,
  notes,
  ux
})

export default appStore