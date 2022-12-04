import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import "./slick.css";
import "./slick-theme.css";
import Slider from "react-slick";


const SectionEight = () => {

    const userStories = [

        {
            name: 'Gbenga John Osukoya',
            story: `I had an awesome experience with carbon, very reliable n 
            trustworthy, infact d instalmental repayment is d tip of d iceberg. I hereby recommend this 
            LOAN APP among apps...CARBON to all prospective borrower, u will never be disappointed.`,
            pic: '',
            id: 1

        },
        {
            name: 'Gbenga John Osukoya',
            story: `I had an awesome experience with carbon, very reliable n 
            trustworthy, infact d instalmental repayment is d tip of d iceberg. I hereby recommend this 
            LOAN APP among apps...CARBON to all prospective borrower, u will never be disappointed.`,
            pic: '',
            id: 2

        },
        {
            name: 'Gbenga John Osukoya',
            story: `I had an awesome experience with carbon, very reliable n 
            trustworthy, infact d instalmental repayment is d tip of d iceberg. I hereby recommend this 
            LOAN APP among apps...CARBON to all prospective borrower, u will never be disappointed.`,
            pic: '',
            id: 3

        },
        {
            name: 'Gbenga John Osukoya',
            story: `I had an awesome experience with carbon, very reliable n 
            trustworthy, infact d instalmental repayment is d tip of d iceberg. I hereby recommend this 
            LOAN APP among apps...CARBON to all prospective borrower, u will never be disappointed.`,
            pic: '',
            id: 4

        },
        {
            name: 'Gbenga John Osukoya',
            story: `I had an awesome experience with carbon, very reliable n 
            trustworthy, infact d instalmental repayment is d tip of d iceberg. I hereby recommend this 
            LOAN APP among apps...CARBON to all prospective borrower, u will never be disappointed.`,
            pic: '',
            id: 5

        },
    ]


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "170px",
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }
    };




    return (
        <div className='bg-gray-100 h-[80vh]'>
            <div className='container mx-auto mb-20'>
                <div className='flex justify-center'>

                    <div className='flex justify-center pt-32 px-auto flex-col space-y-10 items-center'>
                        <div>
                            <h2 className='text-black font-black text-5xl'>Trusted by over 2 million customers</h2>
                        </div>

                        <div className='flex space-x-2'>
                            <FaStar className='text-purple-900 text-2xl' />
                            <FaStar className='text-purple-900 text-2xl' />
                            <FaStar className='text-purple-900 text-2xl' />
                            <FaStar className='text-purple-900 text-2xl' />
                            <FaStarHalf className='text-purple-900 text-2xl' />

                            <div><h2 className='text-xl text-gray-600 font-bold'>+ 4.4</h2></div>
                        </div>

                        <div><h2 className='text-2xl font-bold text-gray-600'>Score based on over 78,000 reviews on Google Play Store and App Store</h2></div>

                        <div>



                        </div>
                    </div>
                </div>


                <div>

                    <Slider className='space-x-10 flex ' {...settings}>
                        {
                            userStories.map((user) => {
                                return (
                                    <div className='flex flex-col space-y-5 bg-white rounded-lg space-x-7 p-5 h-[350px]' key={user.id}>
                                        <div className='text-black'>{user.story}</div>
                                        <div className='flex space-x-7'>
                                            <div>{user.pic}</div>
                                            <div className='text-black'>{user.name}</div>

                                        </div>

                                    </div>
                                )
                            }

                            )
                        }
                    </Slider>

                    <div><h2 className='text-purple-900 flex justify-center'>Read more user stories</h2></div>

                </div>
            </div>
        </div>
    )
}

export default SectionEight