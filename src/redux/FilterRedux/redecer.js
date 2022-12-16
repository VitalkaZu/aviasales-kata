import { SELECT_FILTER } from '../types'

const initialState = {
  all: { label: 'Все', checked: true },
  without: { label: 'Без пересадок', countStops: 0, checked: true },
  one: { label: '1 пересадка', countStops: 1, checked: true },
  two: { label: '2 пересадки', countStops: 2, checked: true },
  three: { label: '3 пересадки', countStops: 3, checked: true },
}

// const initialState = {
//   10: { label: 'Все', checked: true },
//   0: { label: 'Без пересадок', countStops: 0, checked: true },
//   1: { label: '1 пересадка', countStops: 1, checked: true },
//   2: { label: '2 пересадки', countStops: 2, checked: true },
//   3: { label: '3 пересадки', countStops: 3, checked: true },
// }

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
