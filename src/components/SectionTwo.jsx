import React from 'react'
import phone from '../assests/phone.png'
import { FcNext } from 'react-icons/fc'

const SectionTwo = () => {
    return (
        <div className='container mx-auto  mt-[40px] md:mt-[90px]'>
            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row  xl:flex-row  justify-center md:items-center md:justify-between '>
                
                <div className='space-y-5 w-[27rem] md:w-[40rem] px-5'>
                    <div className='w-40 rounded-full flex justify-center py-1 bg-gray-300 font-medium'><h2 className='text-purple-900 text-xl'>Instant loans</h2></div>
                    <div><h2 className='text-black text-2xl font-bold md:text-3xl '>We make access to credit simple and easy. No guarantors, collaterals, or long forms.</h2></div>
                    <div className='w-[370px] md:w-[550px]'><h2 className='md:text-xl font-medium text-gray-500'>Apply 24/7 and receive funds in your Carbon account instantly. 
                    Unlock higher loan amounts and lower interest rates by repaying loans on time.</h2>
                    </div>
                    <div className='flex items-center space-x-2'><h2 className='text-purple-800 font-semibold text-xl'>Learn more</h2> <FcNext className='   rounded-full w-7 h-7 ' /> </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-[30rem] md:w-[40rem] '><img src={phone} alt='phone' className='w-[40rem] md:w-[40rem] ' /></div>

                </div>
            </div>
        </div>
    )
}

export default SectionTwo