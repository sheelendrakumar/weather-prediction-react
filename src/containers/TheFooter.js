import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://www.tftus.com/" target="_blank" rel="noopener noreferrer">TFT</a>
        <span className="ml-1">&copy; 2020 Think future technology.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.deltika.com/" target="_blank" rel="noopener noreferrer">Deltika</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
