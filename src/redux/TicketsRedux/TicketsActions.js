import { LOAD_TICKETS, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from '../types'
import { AviaSalesService } from '../../services/serviceAviasales/serviceAviasales'

export const loadTickets = () => {
  AviaSalesService.getSearchId().then((id) => {
    AviaSalesService.getTickets(id).then(({ tickets, stop }) => {
      console.log(tickets)
      return { type: LOAD_TICKETS, tickets, stop }
    })
  })
}

export const loaderDisplayOn = () => ({
  type: LOADER_DISPLAY_ON,
})

export const loaderDisplayOff = () => ({
  type: LOADER_DISPLAY_OFF,
})
