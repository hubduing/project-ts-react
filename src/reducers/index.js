import { combineReducers } from 'redux'
import slider from './ReducerSlider'
import counter from './ReducerCounter'

export default combineReducers({
  slider,
  counter
})