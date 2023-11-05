import React from 'react'
import PropType from 'prop-types'

BaseLayout.propTypes = {
    children: PropType.node.isRequired,
}


export default function BaseLayout({ children }) {
  return (
    <div className=''>
        {children}
    </div>
  )
}

