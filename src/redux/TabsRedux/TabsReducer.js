import { CHANGE_TAB } from '../types'

const initialState = {
  items: {
    lowCash: { label: 'Самый дешевый', selected: true },
    fast: { label: 'Самый быстрый', selected: false },
    optimal: { label: 'Оптимальный', selected: false },
  },
  selectedKey: 'optimal',
}

export const TabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        selectedKey: action.selectedKey,
      }
    default:
      return state
  }
}
