import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/FilterRedux/FilterActions'
import styles from './Filter.module.scss'
// import PropTypes from 'prop-types'
//
// Filter.propTypes = {
//
// }

function Filter() {
  const dispatch = useDispatch()
  // const selectedFilter = useSelector((state) => state.FilterReducer.selected)
  const objFilters = useSelector((state) => state.FilterReducer)

  const handleChange = (e) => {
    dispatch(selectFilter(e.target.id, objFilters))
  }

  return (
    <div className={styles.filter}>
      <span className={styles.filter__header}>Колчество пересадок</span>
      {/* <span className={styles.filter__header}>{selectedFilter}</span> */}
      <ul>
        {Object.entries(objFilters).map(([key, value]) => (
          <li key={key} className={styles.filter__item}>
            <label htmlFor={key} className={styles.filter__label}>
              <input
                type="checkbox"
                id={key}
                checked={value.checked}
                className={styles.filter__input}
                onChange={handleChange}
              />
              <span className={styles.filter__checkbox} />
              {value.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
