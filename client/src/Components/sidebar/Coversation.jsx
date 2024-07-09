import React from 'react'

function Coversation() {
  return (
    <>
    <div className=' flex items-center hover:bg-sky-300 rounded gap-2 p-2 py-1 cursor-pointer'>
    <div className='avatar online'>
    <div className='w-12 rounded-full'>
        <img src="https://avatar.iran.liara.run/public" alt="user avatar" srcset="" />
    </div>

    </div>
    <div className='flex flex-col flex-1'>
      <div className='flex gap-3 justify-between'>
        <p className='text-gray-200 font-bold'>John Doe</p>
        <span className='text-xl'>😄</span>

      </div>
      </div>
    </div>
    <div className='divider py-0 my-0 h-1'></div>
    </>
  )
}

export default Coversation