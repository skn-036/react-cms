import React from 'react';
import Navbar from './navbar/Navbar';

interface Props  {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const MainContent: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {

  return (
    <>
      <div className={`sidebar__overlay${showSidebar ? ' show' : ''}`} onClick={() => setShowSidebar(!showSidebar)}></div>
      <div className='main__content'>
        {/* <button onClick={() => setShowSidebar(!showSidebar)}>Hello</button> */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>  
    </>
  );
};

export default MainContent;
