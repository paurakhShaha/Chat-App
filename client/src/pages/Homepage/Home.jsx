import React from 'react'


import Sidebar from '../../Components/sidebar/Sidebar.jsx'
import MessageContainer from '../../Components/messages/MessageContainer.jsx'
const Home = () => {
  return (
    <div className='w-full sm:h-[450px] md:h-[550] rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 overflow-hidden flex m-10 justify-center'>
      <Sidebar/>
      <MessageContainer />
    </div>
  )
}

export default Home