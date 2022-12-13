import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './app.module.scss'
import './global.scss'
import { AviaSalesService } from '../../services/serviceAviasales/serviceAviasales'

import ListTicket from '../ListTicket'
import SortTabs from '../SortTabs/SortTabs'
import Filter from '../Filter/Filter'
// import PropTypes from 'prop-types'

// App.propTypes = {}

function App() {
  useEffect(() => {
    AviaSalesService.getSearchId().then((id) => {
      AviaSalesService.getTickets(id).then((arrTickets) => {
        console.log(arrTickets)
      })
    })
  }, [])

  // const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.items)
  console.log(tickets)
  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <aside className={styles.app__left}>
          <Filter />
        </aside>
        <main className={styles.app__main}>
          <SortTabs />
          <ListTicket />
        </main>
      </div>
    </div>
  )
}

export default App
