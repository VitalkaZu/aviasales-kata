import React from 'react'
import { useSelector } from 'react-redux'

import styles from './cardTicket.module.scss'
import FieldWithHead from '../FieldWithHead'
// import { filterReducer } from '../../redux/FilterRedux/redecer'
// import './cardTicket.module.scss'
// CardTicket.propTypes = {}

function CardTicket({ ticket }) {
  const labels = useSelector((state) => state.filterReducer)
  const { price, carrier, segments } = ticket
  const [to, back] = segments
  console.log(to, back)
  console.log(price, carrier)

  const intervalToTime = (int) => {
    const hours = Math.floor(int / 60)
    const min = int % 60
    return `${hours}ч ${min}м`
  }

  const titleCountTransfer = (count) => labels.filter((elem) => elem.countStops === count).label

  return (
    <div className={styles.cardTicket}>
      <div className={styles.cardTicket__header}>
        <span className={styles.cardTicket__price}>{price}</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Logo avia company" />
      </div>
      <div className={styles.cardTicket__fields}>
        <FieldWithHead field={to.date} header={`${to.origin} - ${to.destination}`} />
        <FieldWithHead field={intervalToTime(to.duration)} header="В пути" />
        <FieldWithHead field={to.stops.join(', ')} header="Пересадки" />
        <FieldWithHead field={back.date} header={`${back.origin} - ${back.destination}`} />
        <FieldWithHead field={intervalToTime(back.duration)} header="В пути" />
        <FieldWithHead field={back.stops.join(', ')} header={titleCountTransfer(back.stops.length)} />
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
