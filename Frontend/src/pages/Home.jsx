import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='h-screen bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center pt-8 flex flex-col justify-between'>
        <img className='w-16 ml-8' src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png" alt="" />
        <div className='bg-white pb-7 py-5 px-10'>
          <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
          <Link to={'/login'} className='w-full bg-black text-white py-5 mt-2 rounded flex items-center justify-center'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home