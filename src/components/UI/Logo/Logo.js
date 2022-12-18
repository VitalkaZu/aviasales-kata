import React from 'react'
import styles from './Logo.module.scss'
// import PropTypes from 'prop-types'
//
// Logo.propTypes = {
//
// }

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="Logo.png" alt="Logo" />
    </div>
  )
}

export default Logo
