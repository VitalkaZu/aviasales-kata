import { LOAD_TICKETS, LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_ON } from '../types'

const initialState = {
  tickets: [],
  isLoading: false,
  isError: false,
  isStop: false,
  countToView: 5,
}

export const TicketsReducer = (state = initialState, action) => {
  console.log('TicketsReducer >>>>>  ', action)
  switch (action.type) {
    case LOAD_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.data.tickets], isStop: action.data.stop }
    case LOADER_DISPLAY_ON:
      return { ...state, isLoading: true }
    case LOADER_DISPLAY_OFF:
      return { ...state, isLoading: false }
    case ERROR_ON:
      return { ...state, isError: true }
    default:
      return state
  }
}
