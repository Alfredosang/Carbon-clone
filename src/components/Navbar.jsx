import React from 'react'
import logo from '../assests/Logo.svg'
import { CgMenu } from 'react-icons/cg'

export const Navbar = () => {
  return (
    <div className='w-[100%] h-[90px] shadow-sm flex items-center'>
      <nav className='container mx-auto flex justify-between px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0'>
        <div className='flex justify-start space-x-10 items-center'>
          <div><img src={logo} alt='brand logo' /></div>
          <div className='hidden md:flex justify-start space-x-10 items-center'>
            <div><h1 className='text-purple-900 font-bold'>Personal</h1></div>
            <div><h1 className='text-black '>Business</h1></div>
          </div>

          
        </div>

        <div className='hidden md:flex justify-start space-x-10  items-center  '>
          <div><h1 className='text-gray-500  '>Features</h1></div>
          <div><h1 className='text-gray-500  '>Company</h1></div>
          <div><h1 className='text-gray-500  '>FAQ</h1></div>
          <div><h1 className='text-gray-500  '>Help</h1></div>
          <button className='w-[100px] h-[50px] rounded-md bg-gray-200 text-purple-900 text-xl'>Sign in</button>


        </div>
        <div className='flex md:hidden'>
          <div className='text-black bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center '><CgMenu size={30} /></div>
        </div>

      </nav>

    </div>
  )
}
