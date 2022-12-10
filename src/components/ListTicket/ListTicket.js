import React from 'react'
import styles from './ListTicket.module.scss'
import CardTicket from '../CardTicket'
// import PropTypes from 'prop-types'
//
// ListTicket.propTypes = {
//
// }

function ListTicket() {
  return (
    <ul className={styles.listTicket}>
      <CardTicket />
      <CardTicket />
      <CardTicket />
    </ul>
  )
}

export default ListTicket
