import React from 'react'
import styles from './SortTabs.module.scss'
// import PropTypes from 'prop-types'
//
// SortTabs.propTypes = {
//
// }

function SortTabs() {
  return (
    <ul className={styles.sortTabs}>
      <li className={`${styles.sortTabs__item} ${styles.sortTabs__item_left}`}>Самый дешевый</li>
      <li className={`${styles.sortTabs__item} ${styles.sortTabs__item_center}`}>Самый быстрый</li>
      <li className={`${styles.sortTabs__item} ${styles.sortTabs__item_right}`}>Оптимальный</li>
    </ul>
  )
}

export default SortTabs
