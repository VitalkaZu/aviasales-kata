import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer, tabs } from './reducer'
import { filterReducer } from './FilterRedux/redecer'
import { TicketsReducer } from './TicketsRedux/TickersReducer'
// import { reducer } from './reducer'
// import rootReducer, { reducer } from './reducer'

// const rootReducer = combineReducers({ reducer })

const rootReducer = combineReducers({
  reducer,
  tabs,
  filterReducer,
  TicketsReducer,
})

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store
