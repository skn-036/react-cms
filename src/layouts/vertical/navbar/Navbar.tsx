import React, { useRef } from 'react'
import Logo from './Logo'

import { BiMenu } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

interface Props {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const Navbar: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const searchQuery = useRef<HTMLInputElement>(null)
  const searchSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    if(searchQuery.current !== null) {
      
    }
    console.log(searchQuery.current?.value);
  }
  return (
    <div className='navbar d-flex flex-row justify-content-between align-items-center px-2 w-100'>
      {/* logo section */}
      <div className="logo d-flex flex-row align-items-center">
        <BiMenu 
          className="text-primary-light font-weight-bold text-24px cursor-pointer me-3 h-max-content"
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <Logo classes={'h-100'}/>
      </div>
      {/* search section */}
      <div className="flex-grow-1 search my-auto ms-1 me-5">
        <form className='w-100 h-100 position-relative d-flex align-items-center' onSubmit={searchSubmit}>
          <input 
            type="text"
            className="form-control py-25 text-medium font-weight-thin"
            placeholder='search'
            ref={searchQuery}
            name='search'
            required
          />
          <Button type='submit' variant='outline-primary' className='search-icon position-absolute text-12px py-25'>Search</Button>
        </form>
      </div>
      {/* right icons section */}
      <div className="navbar-icons d-flex flex-row align-items-center">
        <Dropdown>
          <Dropdown.Toggle variant="outline-primary" className='navbar-icon mr-50'>
            <MdNotificationsNone />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="outline-primary" className='navbar-icon mr-50'>
          <MdNotificationsNone />
        </Button>
      </div>

    </div>
  )
}

export default Navbar