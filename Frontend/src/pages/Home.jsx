import React from 'react'

const Home = () => {
  return (
    <div className='h-screen relative'>
      <img className='w-16 mb-7 absolute left-5 top-5' src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png" alt="" />
      <div className='h-screen w-screen'>
        {/* image for temporary uses */}
        <img className='h-full w-full object-cover'
          src="https://lh3.googleusercontent.com/proxy/GH6cV2LdByuyV50BDypx-KHuQokGS5hH7IRAGva1unyEXE3X2UXvmcSrlCkDTSRKOEoCzi3dJe3qjJV0OKBVJfaiNM7-EhddY8MIqZmQWkn--tksiio7SZ4SjooC5pAu9GMIUW0gl5yf=w1200-h630-p-k-no-nu" alt="" />
      </div>

      <div className='bg-white h-screen absolute w-full top-0  rounded-t-lg'>
        <div className=' bg-red-100 h-[20%] p-5'>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form action="">
            <input className='border px-12 py-2 text-base rounded-lg w-full mt-3 mb-3 bg-[#eee]' type="text" placeholder='Add a pickup location' />

            <input className='border px-12 py-2 text-base rounded-lg w-full bg-[#eee]' type="text" placeholder='Enter your destination' />
          </form>
        </div>

        <div className='h-[80%] bg-purple-500'>

        </div>
      </div>


    </div>
  )
}

export default Home