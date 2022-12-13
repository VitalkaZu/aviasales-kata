import { REQUEST_TICKETS, RECEIVE_TICKETS, GET_SEARCH_ID } from './actions'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [
    {
      price: 46910,
      carrier: 'AK',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2022-09-26T13:20:28.007Z',
          duration: 1164,
          stops: ['DXB', 'DOH', 'HKG'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-03-20T18:00:31.342Z',
          duration: 680,
          stops: [],
        },
      ],
    },
    {
      price: 62470,
      carrier: 'AK',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2022-07-15T06:31:45.996Z',
          duration: 808,
          stops: ['IST'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2022-11-10T19:46:21.354Z',
          duration: 1059,
          stops: ['DXB'],
        },
      ],
    },
    {
      price: 52620,
      carrier: 'AK',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2022-12-02T17:10:15.262Z',
          duration: 1345,
          stops: ['DEL', 'IST', 'DEL'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-07-03T22:48:31.527Z',
          duration: 1157,
          stops: ['JNB', 'HKG'],
        },
      ],
    },
    {
      price: 68920,
      carrier: 'S7',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-02-25T16:26:02.898Z',
          duration: 1171,
          stops: ['DEL', 'DEL', 'IST'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-08-11T03:23:30.260Z',
          duration: 1183,
          stops: ['DOH', 'HKG', 'HKG'],
        },
      ],
    },
  ],
}

const tickets = (state = initialState, action) => {
  switch (action.type) {
    // case INVALIDATE_SUBREDDIT:
    //   return {
    //     ...state,
    //     didInvalidate: true,
    //   }
    case GET_SEARCH_ID:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      }
    case REQUEST_TICKETS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      }
    case RECEIVE_TICKETS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: [...state.items, action.payload],
        // lastUpdated: action.receivedAt,
      }
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

export default tickets
