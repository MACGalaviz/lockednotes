import { combineReducers } from 'redux'
import { controller } from './controller'
import { ux } from './ux'

const saspsp = combineReducers({
  controller,
  ux
})

export default saspsp