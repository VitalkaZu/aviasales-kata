import { SELECT_FILTER } from '../types'

const initialState = {
  all: { label: 'Все', checked: true },
  without: { label: 'Без пересадок', checked: true },
  one: { label: '1 пересадка', checked: true },
  two: { label: '2 пересадка', checked: true },
  three: { label: '3 пересадка', checked: true },
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FILTER:
      console.log(action)
      return {
        ...state,
        [action.selectedKey]: {
          ...state[action.selectedKey],
          checked: !state[action.selectedKey].checked,
        },
      }
    default:
      return state
  }
}
