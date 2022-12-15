import { LOAD_TICKETS, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, ERROR_ON } from '../types'
import { AviaSalesService } from '../../services/serviceAviasales/serviceAviasales'

function loaderDisplayOn() {
  return {
    type: LOADER_DISPLAY_ON,
  }
}

function loaderDisplayOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  }
}

// function getSearchId() {
//   const res = AviaSalesService.getSearchId()
//     .then()
//     .catch((e) => {
//       console.log(e)
//     })
//   return res
// }

function errorOn() {
  return {
    type: ERROR_ON,
  }
}

// async function getTickets(id) {
//   AviaSalesService.getTickets(id).then(({ tickets, stop }) => {
//     console.log(tickets)
//     return { type: LOAD_TICKETS, tickets, stop }
//   })
// }

// export function loadTickets() {
//   return async (dispatch) => {
//     await dispatch(loaderDisplayOn())
//     const id = await AviaSalesService.getSearchId()
//       .then()
//       .catch((e) => {
//         console.log(e)
//       })
//     if (typeof id === 'string') {
//       await dispatch(getTickets(id))
//     }
//     await dispatch(loaderDisplayOff())
//   }
// }

export function loadTickets() {
  return async (dispatch) => {
    try {
      let resArr = []
      dispatch(loaderDisplayOn())
      // const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
      // const resArr = await response.json()
      const resId = await AviaSalesService.getSearchId().then(async (id) => id)
      if (resId) {
        resArr = await AviaSalesService.getTickets(resId)
          .then((res) => res)
          .catch((e) => {
            console.log(e)
          })
      }
      // const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
      // const jsonData = await response.json()
      if (resArr) {
        dispatch({
          type: LOAD_TICKETS,
          data: resArr,
        })
        dispatch(loaderDisplayOff())
      }
      // setTimeout(() => {
      // }, 1000)
    } catch (err) {
      dispatch(errorOn())
      dispatch(loaderDisplayOff())
    }
  }
}
