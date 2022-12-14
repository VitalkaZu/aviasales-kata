import { combineReducers, createStore } from 'redux'
import { reducer, tabs } from './reducer'
import { filterReducer } from './FilterRedux/redecer'
// import { reducer } from './reducer'
// import rootReducer, { reducer } from './reducer'

// const rootReducer = combineReducers({ reducer })

const rootReducer = combineReducers({
  reducer,
  tabs,
  filterReducer
})

const store = createStore(rootReducer)

export default store
