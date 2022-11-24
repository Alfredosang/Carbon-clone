import React from 'react'
import five from '../assests/five.png'
import { FcNext } from 'react-icons/fc'

const SectionFive = () => {
    return (
        <div className='container mx-auto md:mt-[90px]'>
            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row  xl:flex-row  justify-center md:items-center md:justify-between lg:justify-between xl:justify-between'>
                <div className='flex justify-center '>
                    <img src={five} alt='phone\' className='w-[40rem] md:w-[40rem] ' />

                </div>
                <div className='space-y-5 w-[40rem] px-7'>
                    <div className='w-60 rounded-full flex justify-center py-1 bg-gray-300 font-medium'><h2 className='text-purple-900 text-xl'>Free credit scores</h2></div>
                    <div><h2 className='text-black text-2xl font-bold md:text-3xl'>Keep track of your credit history across financial institutions</h2></div>
                    <div className='w-[370px] md:w-[550px]'><h2 className='md:text-xl font-medium text-gray-500'>Be notified of any issues you may have. We’ll help you stay on top of things.. and it’s completely free.</h2>
                    </div>
                    <div className='flex items-center space-x-2'><h2 className='text-purple-800 font-semibold text-xl'>Learn more</h2> <FcNext className='   rounded-full w-7 h-7 ' /> </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFive