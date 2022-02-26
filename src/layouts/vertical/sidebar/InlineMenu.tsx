import React from 'react'
import { Menus } from '../../../models/sidebar'
import { Link } from 'react-router-dom'

interface Props {
  menu: Menus
  setShowSidebar: (value: boolean) => void
}

const InlineMenu:React.FC<Props> = ({ menu, setShowSidebar }) => {
  return (
    <li className={`${menu.path === '/chat' ? 'active' : ''}`}>
      <Link
        to={menu.path}
        onClick={ () => setShowSidebar(false) }
      >
        { menu.title }
      </Link>
    </li>
  )
}

export default InlineMenu