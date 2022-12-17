import React from 'react'
import { useSelector } from 'react-redux'
import Tab from '../Tab'
// import { connect } from 'react-redux'
// import { replaceText } from '../../redux/actions'
// import { useSelector } from 'react-redux'
import styles from './SortTabs.module.scss'
// import PropTypes from 'prop-types'
//
// SortTabs.propTypes = {
//
// }

function SortTabs() {
  const { items, selectedKey } = useSelector((state) => state.TabsReducer)
  const arrTabs = Object.entries(items)
  console.log(arrTabs, selectedKey)
  return (
    <>
      {/* <span>{tab}</span> */}
      {/* <button type="button" onClick={onSelectTab}> */}
      {/*   BUTTON */}
      {/* </button> */}
      <ul className={styles.sortTabs}>
        {arrTabs.map((item) => (
          <Tab label={item[1].label} selected={selectedKey === item[0]} />
        ))}
        {/* <Tab selected label="Дешевый" /> */}
        {/* <li> */}
        {/*   <button type="button" className={`${styles.sortTabs__item} ${styles.sortTabs__item_left}`}> */}
        {/*     Самый дешевый */}
        {/*   </button> */}
        {/* </li> */}
        {/* <li> */}
        {/*   <button type="button" className={`${styles.sortTabs__item} ${styles.sortTabs__item_center}`}> */}
        {/*     Самый быстрый */}
        {/*   </button> */}
        {/* </li> */}
        {/* <li> */}
        {/*   <button type="button" className={`${styles.sortTabs__item} ${styles.sortTabs__item_right}`}> */}
        {/*     Оптимальный */}
        {/*   </button> */}
        {/* </li> */}
      </ul>
    </>
  )
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onSelectTab: (e) => {
//       e.preventDefault()
//       console.log('click')
//       // const action = { type: 'REPLACE_TEXT' }
//       dispatch(replaceText())
//     },
//   }
// }
//
// function mapStateToProps(state) {
//   console.log('mapStateToProps > ', state)
//   return {
//     tab: state.tabs.text,
//   }
// }

export default SortTabs

// export default connect(mapStateToProps, mapDispatchToProps)(SortTabs)
