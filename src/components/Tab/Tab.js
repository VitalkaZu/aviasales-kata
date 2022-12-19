import React from 'react'
import styles from './Tab.module.scss'

function Tab({ label, selected, onClick }) {
  return (
    <li className={`${styles.item} ${selected ? styles.sel : null}`}>
      <button
        type="button"
        className={styles.button}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  )
}

export default Tab
