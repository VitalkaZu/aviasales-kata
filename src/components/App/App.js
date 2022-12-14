import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadTickets } from '../../redux/TicketsRedux/TicketsActions'
// import { useSelector } from 'react-redux'
import styles from './app.module.scss'
import './global.scss'
// import { AviaSalesService } from '../../services/serviceAviasales/serviceAviasales'

import ListTicket from '../ListTicket'
import SortTabs from '../SortTabs/SortTabs'
import Filter from '../Filter/Filter'
// import tickets from '../../redux/reducer'
// import PropTypes from 'prop-types'

// App.propTypes = {}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // AviaSalesService.getSearchId().then((id) => {
    //   AviaSalesService.getTickets(id).then((arrTickets) => {
    //     console.log(arrTickets)
    //   })
    // })
    dispatch(loadTickets)
  }, [])

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
