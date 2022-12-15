import React from 'react'
import { useSelector } from 'react-redux'
import styles from './ListTicket.module.scss'
import CardTicket from '../CardTicket'
// import PropTypes from 'prop-types'
//
// ListTicket.propTypes = {
//
// }

function ListTicket() {
  const { tickets, countToView } = useSelector((state) => state.TicketsReducer)
  // eslint-disable-next-line arrow-body-style
  const filters = useSelector((state) => {
    return Object.values(state.filterReducer).reduce((newArr, item) => {
      if (item.countStops !== undefined && item.checked) {
        newArr.push(item.countStops)
      }
      return newArr
    }, [])
  })

  console.log('filters >>>> ', filters)

  // eslint-disable-next-line arrow-body-style
  const filtArr = tickets.filter((el) => {
    return filters.includes(Math.max(el.segments[0].stops.length, el.segments[1].stops.length))
  })

  console.log('filters >>>> ', filtArr)

  const arrToView = filtArr.slice(0, countToView)
  console.log(arrToView)
  return (
    <ul className={styles.listTicket}>
      {arrToView.map((ticket, index) => (
        <CardTicket key={index} ticket={ticket} />
      ))}
    </ul>
  )
}

export default ListTicket
