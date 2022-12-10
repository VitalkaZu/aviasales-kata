import React from 'react'
import styles from './app.module.scss'
import './global.scss'

import ListTicket from '../ListTicket'
import SortTabs from '../SortTabs/SortTabs'
// import PropTypes from 'prop-types'

// App.propTypes = {}

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <SortTabs />
        <ListTicket />
      </div>
    </div>
  )
}

export default App
