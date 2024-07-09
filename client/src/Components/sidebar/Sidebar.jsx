import React from 'react'
import SearchInput from './SearchInput'
import ConversationList from './ConversationList'
import Logout from './Logout'

function Sidebar() {
  return (
    <div className='border-r border-sky-100 flex flex-col p-4'>
      <SearchInput />
      <div className='divider px-3 '></div>
      <ConversationList/>
      <Logout/>
      
    </div>
  )
}

export default Sidebar
