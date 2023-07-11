import React from 'react'
import { Typography } from 'antd'
function AppFooter() {
  return (
    <div className='AppFooter'>
      <Typography.Link href='tel:+123456789'>
        +91 7000980863
      </Typography.Link>
      <Typography.Link href='https://www.google.com' target='_blank'>Privacy Policy</Typography.Link>
      <Typography.Link href='https://www.google.com' target='_blank'>Terms of use</Typography.Link>
    </div>
  )
}

export default AppFooter