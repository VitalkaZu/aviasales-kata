import React from 'react'

import styles from './cardTicket.module.scss'
// import './cardTicket.module.scss'
// CardTicket.propTypes = {}

function CardTicket() {
  console.log(styles)
  return (
    <div className={styles.cardTicket}>
      <div className={styles.cardTicket__header}>
        <span>13900</span>
        <img src={null} alt="Logo avia company" />
      </div>
    </div>
  )
}

// // Код города (iata)
// origin: string
// // Код города (iata)
// destination: string
// // Дата и время вылета туда
// date: string
// // Массив кодов (iata) городов с пересадками
// stops: string[]
// // Общее время перелёта в минутах
// duration: number

export default CardTicket
