import { SELECT_FILTER } from '../types'

export const selectFilter = (key) => ({
  type: SELECT_FILTER,
  selectedKey: key,
})
