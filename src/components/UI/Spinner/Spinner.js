import React from 'react'
import { Spin } from 'antd'

function Spinner({ isLoading }) {
  return <Spin size="large" spinning={isLoading} />
}

export default Spinner
