import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/FilterRedux/actions'
import styles from './Filter.module.scss'
// import PropTypes from 'prop-types'
//
// Filter.propTypes = {
//
// }

function Filter() {
  const dispatch = useDispatch()
  // const selectedFilter = useSelector((state) => state.filterReducer.selected)
  const objFilters = useSelector((state) => state.filterReducer)

  const handleChange = (e) => {
    dispatch(selectFilter(e.target.id))
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

      {/* <ul> */}
      {/*   <li className={styles.filter__item}> */}
      {/*     <label htmlFor="all" className={styles.filter__label}> */}
      {/*       <input */}
      {/*         id="all" */}
      {/*         type="checkbox" */}
      {/*         placeholder="Все" */}
      {/*         className={styles.filter__input} */}
      {/*       /> */}
      {/*       <span className={styles.filter__checkbox} /> */}
      {/*       Все */}
      {/*     </label> */}
      {/*   </li> */}
      {/*   <li className={styles.filter__item}> */}
      {/*     <label htmlFor="without" className={styles.filter__label}> */}
      {/*       <input */}
      {/*         id="without" */}
      {/*         type="checkbox" */}
      {/*         placeholder="Без пересадок" */}
      {/*         className={styles.filter__input} */}
      {/*       /> */}
      {/*       <span className={styles.filter__checkbox} /> */}
      {/*       Без пересадок */}
      {/*     </label> */}
      {/*   </li> */}
      {/*   <li className={styles.filter__item}> */}
      {/*     <label htmlFor="1" className={styles.filter__label}> */}
      {/*       <input */}
      {/*         id="1" */}
      {/*         type="checkbox" */}
      {/*         placeholder="1 пересадка" */}
      {/*         className={styles.filter__input} */}
      {/*       /> */}
      {/*       <span className={styles.filter__checkbox} />1 пересадка */}
      {/*     </label> */}
      {/*   </li> */}
      {/*   <li className={styles.filter__item}> */}
      {/*     <label htmlFor="2" className={styles.filter__label}> */}
      {/*       <input */}
      {/*         id="2" */}
      {/*         type="checkbox" */}
      {/*         placeholder="2 пересадки" */}
      {/*         className={styles.filter__input} */}
      {/*       /> */}
      {/*       <span className={styles.filter__checkbox} />2 пересадки */}
      {/*     </label> */}
      {/*   </li> */}
      {/*   <li className={styles.filter__item}> */}
      {/*     <label htmlFor="3" className={styles.filter__label}> */}
      {/*       <input */}
      {/*         id="3" */}
      {/*         type="checkbox" */}
      {/*         placeholder="3 пересадки" */}
      {/*         className={styles.filter__input} */}
      {/*       /> */}
      {/*       <span className={styles.filter__checkbox} />3 пересадки */}
      {/*     </label> */}
      {/*   </li> */}
      {/* </ul> */}
    </div>
  )
}

export default Filter
