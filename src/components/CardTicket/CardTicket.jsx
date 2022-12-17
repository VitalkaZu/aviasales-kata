import React from 'react'
import { useSelector } from 'react-redux'
import { add, format } from 'date-fns'

import styles from './cardTicket.module.scss'
import FieldWithHead from '../FieldWithHead'
// import { FilterReducer } from '../../redux/FilterRedux/redecer'
// import './cardTicket.module.scss'
// CardTicket.propTypes = {}

function CardTicket({ ticket }) {
  const labels = useSelector((state) => Object.values(state.FilterReducer))
  console.log('to arr   >>>>  ', labels)
  const { price, carrier, segments } = ticket
  const [to, back] = segments
  // console.log(to, back)
  // console.log(price, carrier)

  const intervalToTime = (int) => {
    const hours = Math.floor(int / 60)
    const min = int % 60
    return `${hours}ч ${min}м`
  }

  const twoTime = (time, interval) => {
    const toTime = new Date(time)
    const inTime = add(toTime, { minutes: interval })
    return `${format(toTime, 'kk:mm')} - ${format(inTime, 'kk:mm')}`
  }

  const titleCountTransfer = (count) => {
    const label = labels.filter((el) => el.countStops === count)
    return label[0].label
  }

  const row = (direction) => (
    <>
      <FieldWithHead
        field={twoTime(direction.date, direction.duration)}
        header={`${direction.origin} - ${direction.destination}`}
      />
      <FieldWithHead field={intervalToTime(direction.duration)} header="В пути" />
      <FieldWithHead field={direction.stops.join(', ')} header={titleCountTransfer(direction.stops.length)} />
    </>
  )
  // labels[count].label

  return (
    <div className={styles.cardTicket}>
      <div className={styles.cardTicket__header}>
        <span className={styles.cardTicket__price}>{price}</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Logo avia company" />
      </div>
      <div className={styles.cardTicket__fields}>
        {row(to)}
        {row(back)}
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
