import React from 'react'


const Login = props => {
  return (
    <div className='flex flex-col items-start justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-blue-300 border-2'>
        <div >
        <h1 className='font-semibold text-3xl text-center text-gray-500'>
        <span className='text-sky-300'>Login</span>
        </h1>

        </div>
        <form >
          <div>
            <label className="label p-2">
              <span className='text-base label-text '>Username</span>
              </label>
              <input type="text" className="input input-bordered w-full h-10" placeholder="Enter Username" />
          </div>
          <div>
              <label className="label p-2">
              <span className='text-base label-text '>Password</span>
              </label>
              <input type="password" className="input input-bordered w-full h-10 pass" placeholder="Enter Username" />
        
            </div>
            <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>Don't have an account?</a>
            <div>
              <button className='btn mt-2 btn-block btn-sm'>Submit</button>
            </div>
        </form>
      </div>

    </div>
  )
}



export default Login