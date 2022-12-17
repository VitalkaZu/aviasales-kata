import React from 'react'
import { Spin } from 'antd'
// import PropTypes from 'prop-types'
//
// Spinner.propTypes = {

// }

function Spinner({ isLoading }) {
  return <Spin size="large" spinning={isLoading} />
}

export default Spinner
