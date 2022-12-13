import React from 'react'

import styles from './cardTicket.module.scss'
import FieldWithHead from '../FieldWithHead'
// import './cardTicket.module.scss'
// CardTicket.propTypes = {}

function CardTicket() {
  return (
    <div className={styles.cardTicket}>
      <div className={styles.cardTicket__header}>
        <span className={styles.cardTicket__price}>13900</span>
        <img src="//pics.avs.io/99/36/S7.png" alt="Logo avia company" />
      </div>
      <div className={styles.cardTicket__fields}>
        <FieldWithHead field="MOW – HKT" header="10:45 – 08:00" />
        <FieldWithHead field="MOW – HKT" header="10:45 – 08:00" />
        <FieldWithHead field="MOW – HKT" header="10:45 – 08:00" />
        <FieldWithHead field="MOW – HKT" header="10:45 – 08:00" />
        <FieldWithHead field="MOW – HKT" header="10:45 – 08:00" />
        <FieldWithHead field="MOW – HKT" header="10:45 – 08:00" />
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
