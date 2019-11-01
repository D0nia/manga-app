import {combineReducers} from 'redux'
import mangaReducers from './mangareducer'
import titleFilterReducer from './SearchFilter'

export default combineReducers({mangaReducers, titleFilterReducer})