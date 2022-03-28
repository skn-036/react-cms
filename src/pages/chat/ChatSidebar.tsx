import React from 'react'
import { Contact } from '../../models/chat'
import SidebarHeader from './components/sidebar/SidebarHeader'

interface Props {
  contacts: Contact[]
}

const ChatSidebar: React.FC<Props> = ({ contacts }) => {
  return (
    <div className='chat__sidebar'>
      <SidebarHeader />
    </div>
  )
}

export default ChatSidebar