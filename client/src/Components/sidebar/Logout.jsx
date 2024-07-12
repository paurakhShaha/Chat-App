import React, { useEffect } from 'react'
import useLogout from '../../hooks/useLogout'
import useConversation from '../../zustand/useCoversation';

function Logout() {
  const {logout,loading} = useLogout();
  const {setSelectedConversation} = useConversation();

  useEffect(() => {
    //clear selected conversation on logout
    setSelectedConversation(null);
  }, [setSelectedConversation])

  return (
    <div className='mt-5 ' >
    {loading ? (
      <button className='loading loading-spinner' disabled></button>
    ):(
      <button onClick={logout} className='btn btn-primary'>💩</button>
    )}
    </div>
  )
}

export default Logout