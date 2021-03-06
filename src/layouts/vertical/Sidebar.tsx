import React from 'react';
import { menu } from '../../themeConfig';
import Logo from './navbar/Logo';
import { MdClose } from 'react-icons/md';
import Menus from './sidebar/Menus';

interface Props {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`sidebar${(menu.hidden && !showSidebar) ? ' hidden' : (!menu.hidden && menu.collapsed) ? ' collapsed' : ''}`}>
      {/* header */}
      <div className="sidebar-header d-flex flex-row justify-content-between align-items-center">
        <Logo />
        <MdClose className='text-24px text-primary-light cursor-pointer' onClick={() => setShowSidebar(false)} />
      </div>

      {/* Menus */}
      <Menus setShowSidebar={setShowSidebar} />
    </div>
  );
};

export default Sidebar;
