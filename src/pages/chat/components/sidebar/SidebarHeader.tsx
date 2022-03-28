import React from 'react'
import Image from 'react-bootstrap/Image'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import Dropdown from 'react-bootstrap/Dropdown';

const SidebarHeader = () => {
  return (
    <div className='chat__sidebar__header d-flex flex-row px-3 align-items-center justify-content-between'>
      <Image
        className='user__avatar'
        roundedCircle={true}
        src={require('../../../../assets/images/profile.jpg')}
      />
      <div className="d-flex flex-row justify-content-between align-items-center">
        <BiMessageRoundedDetail
          className='text-22px cursor-pointer me-3'
        />

        <Dropdown>
          <Dropdown.Toggle className='text-22px cursor-pointer dropdown__icon text-medium' >
            <HiOutlineDotsVertical />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>One</Dropdown.Item>
            <Dropdown.Item>Two</Dropdown.Item>
            <Dropdown.Item>Three</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


      </div>
    </div>
  )
}

export default SidebarHeader