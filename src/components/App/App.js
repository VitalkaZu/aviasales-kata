import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTickets, getSearchId } from '../../redux/TicketsRedux/TicketsActions'
// import { useSelector } from 'react-redux'
import styles from './app.module.scss'
import './global.scss'
// import { AviaSalesService } from '../../services/serviceAviasales/serviceAviasales'

import ListTicket from '../ListTicket'
import SortTabs from '../SortTabs/SortTabs'
import Filter from '../Filter/Filter'
import ShowMore from '../ShowMore'
import Spinner from '../UI/Spinner'
import Logo from '../UI/Logo/Logo'
// import tickets from '../../redux/reducer'
// import PropTypes from 'prop-types'

// App.propTypes = {}

function App() {
  const dispatch = useDispatch()
  const { searchId, isLoading, isError } = useSelector((state) => state.TicketsReducer)
  // const countSelectedFilters = useSelector(
  //   (state) => Object.values(state.FilterReducer).filter((obj) => obj.checked).length
  // )

  useEffect(() => {
    // AviaSalesService.getSearchId().then((id) => {
    //   AviaSalesService.getTickets(id).then((arrTickets) => {
    //     console.log(arrTickets)
    //   })
    // })
    // dispatch(loadTickets())
    dispatch(getSearchId())
  }, [])

  useEffect(() => {
    if (typeof searchId === 'string') {
      dispatch(loadTickets(searchId))
    }
  }, [searchId])

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Logo />
        <aside className={styles.app__left}>
          <Filter />
        </aside>
        <main className={styles.app__main}>
          {isError ? <span>Что то пошло не так. {isError}</span> : null}
          <SortTabs />
          <Spinner isLoading={isLoading} />
          {/* {countSelectedFilters ? null : <span>Не выбраны фильтры</span>} */}
          <ListTicket />
          <ShowMore />
        </main>
      </div>
    </div>
  )
}

export default App
