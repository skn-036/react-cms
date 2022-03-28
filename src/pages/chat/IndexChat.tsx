import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Contact } from '../../models/chat'
import ChatBox from './ChatBox'
import ChatSidebar from './ChatSidebar'

const IndexChat: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([])

  const fetchContacts = useCallback(async () => {
    const response = await axios.get('/contacts')
    if(response.data) {
      setContacts(response.data)      
    }
  },[])

  // const fetchContacts: () => void = async () => {
  //   const response = await axios.get('/contacts')
  //   if(response.data) {
  //     setContacts(response.data)
  //     console.log(contacts)
  //   }
  // }

  useEffect(() => {
    fetchContacts()
  }, [fetchContacts])


  return (
    <div className='chat row'>
      <div className="col-4 h-100 pe-0">
        <ChatSidebar
          contacts={contacts}
        />
      </div>
      <div className="col-8 h-100 pe-0">
        <ChatBox />
      </div>
    </div>
  )
}

export default IndexChat