import { combineReducers } from 'redux'
import { controller } from './controller'
import { ux } from './ux'

const appStore = combineReducers({
  controller,
  ux
})

export default appStore