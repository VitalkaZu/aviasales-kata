// import { REQUEST_TICKETS, RECEIVE_TICKETS, GET_SEARCH_ID } from './actions'
import { combineReducers } from 'redux'

const defaultState = {
  items: [
    {
      price: 46910,
    },
    {
      price: 62470,
    },
    {
      price: 52620,
    },
    {
      price: 68920,
    },
  ],
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // case INVALIDATE_SUBREDDIT:
    //   return {
    //     ...state,
    //     didInvalidate: true,
    //   }
    // case GET_SEARCH_ID:
    //   return {
    //     ...state,
    //     isFetching: true,
    //     didInvalidate: false,
    //   }
    // case REQUEST_TICKETS:
    //   return {
    //     ...state,
    //     isFetching: true,
    //     didInvalidate: false,
    //   }
    // case RECEIVE_TICKETS:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     didInvalidate: false,
    //     items: [...state.items, action.payload],
    //     // lastUpdated: action.receivedAt,
    //   }
    default:
      return state
  }
}

const filter = (state = 'testtext', action) => {
  switch (action.type) {
    default:
      return state
  }
}

// const tickets = (state = initialState, { type, payload } = {}) => {
//   switch (type) {
//     case 'PUT_TICKETS':
//       return { ...state, tickets: state.tickets.concat(...payload) }
//     default:
//       return state
//   }
// }

// export default reducer

const rootReducer = combineReducers({
  reducer,
  filter,
})

export default rootReducer
