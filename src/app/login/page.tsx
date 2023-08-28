import React from 'react'

const LoginPage = () => {
  return (
    <div className=' h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex justify-center p-4 lg:px-20 xl:px-40 text-blue-500'>
      <div className=' sm:mx-auto sm:w-full sm:max-w-sm shadow-xl shadow-blue-400 rounded-xl'>
      <form className=' flex flex-col m-3  '>
      <h2 className=' font-bold flex justify-center'>Sign in to your account</h2>
        <div className=' flex flex-col'>
          <label htmlFor="email">Email Address</label>
          <input type="email" className='p-2 border-2 rounded-lg border-blue-500' />
        </div>
        <div className=' flex flex-col'>
          <label htmlFor="email">Password</label>
          <input type="password" className=' p-2 border-2 rounded-lg border-blue-500' />
        </div>
        <div className=' mt-4'>
          <button className=' flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 '>Sign In</button>
        </div>
      </form>
      </div> 
    
      
    </div>
  )
}

export default LoginPage