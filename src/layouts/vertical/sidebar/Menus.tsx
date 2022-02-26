import React from 'react';
import menus from '../../../navigation/vertical';
import ChildMenu from './ChildMenu';
import InlineMenu from './InlineMenu';

interface Props {
  setShowSidebar: (value: boolean) => void
}

const Menus: React.FC<Props> = ({ setShowSidebar }) => {
  return (
    <ul className='sidebar__menu__container w-100 mt-3'>
      { menus.map(menu => 
        (!menu.hasChildren) ? (
          <InlineMenu
            key={menu.path}
            menu={menu}
            setShowSidebar={setShowSidebar}
          />
        ) : (
          <ChildMenu
            key={menu.path}
            menu={menu}
            setShowSidebar={setShowSidebar}
          />
        )
      )}
    </ul>
  );
};

export default Menus