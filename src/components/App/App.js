import React from 'react'
import styles from './app.module.scss'
import './global.scss'

import ListTicket from '../ListTicket'
import SortTabs from '../SortTabs/SortTabs'
import Filter from '../Filter/Filter'
// import PropTypes from 'prop-types'

// App.propTypes = {}

function App() {
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
