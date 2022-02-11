import React, { useState } from 'react';
import MainContent from './vertical/MainContent';
import Sidebar from './vertical/Sidebar';

const LayoutVertical: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className='vertical__layout'>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <MainContent showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  ); 
};

export default LayoutVertical;
