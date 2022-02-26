import React from 'react'
import Navbar from './navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import IndexChat from '../../pages/chat/IndexChat'
import IndexKanban from '../../pages/kanban/IndexKanban'

interface Props  {
  showSidebar: boolean
  setShowSidebar: (value: boolean) => void
}

const MainContent: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {

  return (
    <>
      {/* sidebar overlay */}
      <div className={`sidebar__overlay${showSidebar ? ' show' : ''}`} onClick={() => setShowSidebar(!showSidebar)}></div>
      <div className='main__content'>
        {/* navbar */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        {/* page contents */}
        <div className="contents">
          <div className="page__container w-100 h-100">
            <Routes>
              {/* Home */}
              <Route path='/' element={ <IndexChat /> }></Route>
              {/* chat */}
              <Route path='/chat' element={ <IndexChat /> }></Route>
              {/* kanban */}
              <Route path='/tools/kanban' element={ <IndexKanban /> }></Route>
            </Routes>
          </div>
        </div>
      </div>

    </>
  )
}

export default MainContent;
