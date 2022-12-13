import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import tickets from './reducer'

export const store = createStore(tickets, composeWithDevTools)
