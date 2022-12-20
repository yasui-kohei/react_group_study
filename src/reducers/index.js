/// Reducer
/// Actionに組み込まれているTypeに応じて、状態をどのように変化させるかを定義する場所

import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({count})