import React from 'react'
import styles from './Tab.module.scss'
// import PropTypes from 'prop-types'
//
// TabModuleScss.propTypes = {
// }

function Tab({ label, selected }) {
  return (
    <li className={`${styles.item} ${selected ? styles.sel : null}`}>
      <button
        type="button"
        className={styles.button}
      >
        {label}
      </button>
    </li>
  )
}

export default Tab
