import React from 'react'
import logo from '../assests/Logo.svg'

const SectionTen = () => {
    return (
        <div className='h-[100vh] bg-gray-100'>
            <div className='container mx-auto pt-24'>
                <div className='grid grid-cols-6 gap-10'>
                    <div className='flex flex-col '>
                        <div>
                            <img src={logo} alt='logo' />
                        </div>

                        <div className='mt-7'>
                            <select className='w-32 outline-none bg-white h-7'>
                                <option><p className='text-black'>Nigeria</p></option>
                                <option><p className='text-black'>Kenya</p></option>
                            </select>
                        </div>

                    </div>

                    <div className='flex flex-col space-y-3'>
                        <div><p className=' font-bold text-black'>Features</p></div>
                        <div><p className=' text-gray-500'>Carbon account</p></div>
                        <div><p className=' text-gray-500'>Payments</p></div>
                        <div><p className=' text-gray-500'>Cards</p></div>
                        <div><p className=' text-gray-500'>Investments</p></div>
                        <div><p className=' text-gray-500'>Credit report</p></div>
                        <div><p className=' text-gray-500'>Loans</p></div>
                    </div>

                    <div className='flex flex-col space-y-3'>
                        <div><p className=' font-bold text-black'>Learn more</p></div>
                        <div><p className=' text-gray-500'>personal loans</p></div>
                        <div><p className=' text-gray-500'>Get fast loans</p></div>
                        <div><p className=' text-gray-500'>Loans in Nigeria</p></div>
                        <div><p className=' text-gray-500'>Carbon Loans</p></div>
                        <div><p className=' text-gray-500'>SME loans</p></div>
                        <div><p className=' text-gray-500'>Carbon App</p></div>
                        <div><p className=' text-gray-500'>Loans for businesses</p></div>
                        <div><p className=' text-gray-500'>Loans without colateral</p></div>
                        
                    </div>

                    <div className='flex flex-col space-y-3'>
                        <div><p className=' font-bold text-black'>Company</p></div>
                        <div><p className=' text-gray-500'>Media</p></div>
                        <div><p className=' text-gray-500'>About us</p></div>
                        <div><p className=' text-gray-500'>Career</p></div>
                        <div><p className=' text-gray-500'>Blog</p></div>
                        <div><p className=' text-gray-500'>Customers</p></div>
                    </div>

                    <div className='flex flex-col space-y-3'>
                        <div><p className=' font-bold text-black'>Help</p></div>
                        <div><p className=' text-gray-500'>FAQ</p></div>
                        <div><p className=' text-gray-500'>Knowlege base</p></div>
                        <div><p className=' text-gray-500'>Contact</p></div>
                        <div><p className=' text-gray-500'>Community</p></div>
             
                    </div>

                    <div className='flex flex-col space-y-3'>
                        <div><p className=' font-bold text-black'>Legal</p></div>
                        <div><p className=' text-gray-500'>Privacy Policy</p></div>
                        <div><p className=' text-gray-500'>Terms & Conditions</p></div>
                        <div><p className=' text-gray-500'>Cookies</p></div>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SectionTen