import React from 'react'
import heropic from '../assests/heropicture.webp'
import { FcNext } from 'react-icons/fc'
import google from '../assests/googlePlay.svg'
import apple from '../assests/applestore.svg'
import ndic from '../assests/NDIC.svg'
import ndictwo from '../assests/NDICTWO.svg'

const Hero = () => {
    return (
        <div className='container mx-auto mt-[30px] md:mt-[90px]'>
            <div className='flex flex-col sm:flex-col md:flex-row  md:justify-between space-y-7'>
                <div>
                    <div className='space-y-5 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0 '>
                        <div className='bg-red-100 rounded-full  w-[350px] md:w-[400px] h-[50px] flex items-center px-2 space-x-2'>
                            <div className='bg-red-400 rounded-full  w-[100px] h-[30px]'><h2 className='text-white font-bold flex justify-center'>Latest</h2></div>
                            <div><h2 className='text-red-400 font-medium '>We are 10! celebrating a decade of  excellence</h2></div>
                            <div className='text-red-400'><FcNext size={25} /></div>

                        </div>
                        <div className='w-[600px] flex flex-col space-y-3'>
                            <div><h2 className='text-purple-800 text-5xl md:text-6xl font-bold w-[400px] md:w-[600px] leading-[70px]'>Digital Banking for all lifestyles</h2></div>
                            {/* <div><h2 className='text-blue-900 text-6xl font-bold w-[500px]'>all lifestyles</h2></div> */}
                        </div>
                        <div className=' w-[360px] md:w-[500px]'>
                            <h2 className='text-gray-500 font-medium  md:text-xl'>
                                Unlock the power of money with a free Carbon bank account.
                                Pay bills, transfer money, get instant loans
                                and enjoy high-interest savings, all in one place.
                            </h2>
                        </div>
                        <div className=' w-[600px] flex space-x-5'>
                            <div><img src={google} className='w-40 h-24 ' alt='google store' /></div>
                            <div><img src={apple} className='w-40 h-24 ' alt='apple store' /></div>
                        </div>
                        <div className='flex flex-col space-y-5 md:flex-row md:space-x-5'>
                            <div className='flex items-center space-x-2'>
                                <div><img src={ndic} className='w-12 font-medium' alt="ndic logo" /></div>
                                <div><h2 className='text-black md:text-xl'>NDIC Insured</h2></div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div><img src={ndictwo} className='w-10' alt="ndic logo2" /></div>
                                <div><h2 className='text-black md:text-xl font-medium'>Licensed by the Central Bank</h2></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><img src={heropic} className='w-96 sm:w-[600px] md:w-[600px] lg:w-[600px]' alt='hero ' /></div>
            </div>

        </div>
    )
}

export default Hero