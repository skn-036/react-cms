import React from 'react';

import { menu } from '../../themeConfig';

interface Props {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void
}

const Sidebar: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`sidebar${(menu.hidden && !showSidebar) ? ' hidden' : (!menu.hidden && menu.collapsed) ? ' collapsed' : ''}`}>
      <div onClick={() => setShowSidebar(!showSidebar)}>Close</div>
    </div>
  );
};

export default Sidebar;
