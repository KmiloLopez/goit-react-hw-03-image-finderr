import { Blocks } from  'react-loader-spinner'

import React from 'react'

const Loader = () => {
  return (
    <Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
/>
  )
}

export default Loader
