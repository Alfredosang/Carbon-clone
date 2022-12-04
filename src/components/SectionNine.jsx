import React from 'react'
import one from '../assests/carbon-1.png'
import two from '../assests/carbon-2.png'
import three from '../assests/carbon-3.png'
import four from '../assests/carbon-4.png'


const SectionNine = () => {

    
    return (
        <div className='bg-purple-900 h-[50vh]'>
            <div className='container mx-auto'>
                <div className='space-y-3 flex flex-col items-center pt-32'>
                    <h1 className='text-white text-5xl font-bold'>A digital bank made just for you</h1>
                    <p className='text-gray-300  text-2xl text-justify-center lg:px-60 text-center'>Open a new Carbon bank account from your phone or computer
                         and follow the simple on-screen steps to register for an account in minutes.</p>
                </div>
                <div className='flex justify-center items-center space-x-3'>
                    <div className=''>
                        <img src={one} className='w-[250px] object-cover object-center' alt='one' />
                    </div>

                    <div>
                        <img src={two} className='w-[250px] object-cover object-center' alt='two' />
                    </div>

                    <div>
                        <img src={three} className='w-[250px] object-cover object-center' alt='three' />
                    </div>

                    <div>
                        <img src={four} className='w-[250px] object-cover object-center' alt='four' />
                    </div>
                </div>

            </div>
        </div>



    )
}

export default SectionNine