import React from 'react'

interface Props {
  classes?: string;
}

const Logo: React.FC<Props> = ({ classes }) => {
  return (
    <div className={`text-primary-light d-flex align-items-center ${classes}`}>
      <div className='text-20px'>My App</div>
    </div>
  )
}

export default Logo