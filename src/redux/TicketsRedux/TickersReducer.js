import { LOAD_TICKETS, LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF } from '../types'

const initialState = []

export const TicketsReducer = (state = initialState, action) => {
  console.log('TicketsReducer >>>>>  ', action)
  switch (action.type) {
    case LOAD_TICKETS:
      return state
    case LOADER_DISPLAY_ON:
      return state
    case LOADER_DISPLAY_OFF:
      return state
    default:
      return state
  }
}
