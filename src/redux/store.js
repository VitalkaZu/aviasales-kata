import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { reducer, tabs } from './reducer'
import { FilterReducer } from './redusers/FilterRedecer'
import { TicketsReducer } from './redusers/TickersReducer'
import { TabsReducer } from './redusers/TabsReducer'
// import { reducer } from './reducer'
// import rootReducer, { reducer } from './reducer'

// const rootReducer = combineReducers({ reducer })

const rootReducer = combineReducers({
  FilterReducer,
  TicketsReducer,
  TabsReducer,
})

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store
