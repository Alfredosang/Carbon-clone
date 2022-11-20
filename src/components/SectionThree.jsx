import React from 'react'
import phone from '../assests/phone.png'
import { FcNext } from 'react-icons/fc'

const SectionThree = () => {
    return (
        <div className='container mx-auto md:mt-[90px]'>
            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row  xl:flex-row  justify-center md:items-center md:justify-between lg:justify-between xl:justify-between'>
                <div className='flex justify-center '>
                    <img src={phone} alt='phone' className='w-[40rem] md:w-[40rem] ' />

                </div>
                <div className='space-y-5 w-[40rem] px-7'>
                    <div className='w-40 rounded-full flex justify-center py-1 bg-gray-300 font-medium'><h2 className='text-purple-900 text-xl'>Smart savings</h2></div>
                    <div><h2 className='text-black text-2xl font-bold md:text-3xl'>We offer market-leading returns on savings</h2></div>
                    <div className='w-[370px] md:w-[550px]'><h2 className='md:text-xl font-medium text-gray-500'>Your money is always working harder for you.
                        Earn up to 15.5% interest p.a. when you invest with Carbon.</h2>
                    </div>
                    <div className='flex items-center space-x-2'><h2 className='text-purple-800 font-semibold text-xl'>Learn more</h2> <FcNext className='   rounded-full w-7 h-7 ' /> </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree