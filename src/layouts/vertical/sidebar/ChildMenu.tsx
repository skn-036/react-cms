import React, { useState } from 'react'
import { Menus } from '../../../models/sidebar'
import { AiOutlineRight } from 'react-icons/ai'
import Collapse from 'react-bootstrap/Collapse'
import { Link } from 'react-router-dom'

interface Props {
  menu: Menus
  setShowSidebar: (value: boolean) => void
}

const ChildMenu: React.FC<Props> = ({ menu, setShowSidebar }) => {
  const [ showChild, setShowChild ] = useState<boolean>(false)
  return (
    <>
      <li
        className='d-flex flex-row align-items-center justify-content-between menu__with__child'
        onClick={ () => setShowChild(!showChild) }
        aria-controls="child__menu"
      >
        <span> { menu.title } </span>
        <AiOutlineRight className={`me-3 font-weight-bold arrow ${showChild ? 'rotate' : ''}`}/>
      </li>
      { showChild && (
        <Collapse in={showChild}>
          <div id="child__menu" className='p-0 m-0'>
            <ul>
              { menu.children!.map(child => 
                <li
                  key={child.path}
                >
                  <Link
                    to={child.path}
                    onClick={ () => setShowSidebar(false) }
                  >
                    { child.title }
                  </Link>  
                </li>
              )}
            </ul>
          </div>
        </Collapse>
      )}
    </>
  )
}

export default ChildMenu