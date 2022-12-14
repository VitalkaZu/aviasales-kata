import React from 'react'
import { connect } from 'react-redux'
import { replaceText } from '../../redux/actions'
import styles from './SortTabs.module.scss'
// import PropTypes from 'prop-types'
//
// SortTabs.propTypes = {
//
// }

function SortTabs({ tab, onSelectTab }) {
  return (
    <>
      <span>{tab}</span>
      <button type="button" onClick={onSelectTab}>
        BUTTON
      </button>
      <ul className={styles.sortTabs}>
        <li
          className={`${styles.sortTabs__item} ${styles.sortTabs__item_left}`}
        >
          Самый дешевый
        </li>
        <li
          className={`${styles.sortTabs__item} ${styles.sortTabs__item_center}`}
        >
          Самый быстрый
        </li>
        <li
          className={`${styles.sortTabs__item} ${styles.sortTabs__item_right}`}
        >
          Оптимальный
        </li>
      </ul>
    </>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectTab: (e) => {
      e.preventDefault()
      console.log('click')
      // const action = { type: 'REPLACE_TEXT' }
      dispatch(replaceText())
    },
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps > ', state)
  return {
    tab: state.tabs.text,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortTabs)
