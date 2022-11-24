import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

const SectionEight = () => {

    
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    return (
        <div className='bg-gray-100 h-[100vh] '>
            <div className='container mx-auto '>
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

                            {/* <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                ssr={false} // means to render carousel on server-side.
                                infinite={true}
                                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                // deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div className='w-60 h-60 bg-black text-black text-xl'>Hello</div>
                                <div className='w-40 h-40 bg-black'>Hello</div>
                                <div className='w-40 h-40 bg-black'>Hello</div>
                                <div className='w-40 h-40 bg-black'>Hello</div>
                                <div className='w-40 h-40 bg-black'>Hello</div>
                            </Carousel> */}
                        </div>

                        <Slider {...settings}>
                            <div className='w-60 h-60 bg-black text-black text-xl'>Hello</div>
                            <div className='w-40 h-40 bg-black'>Hello</div>
                            <div className='w-40 h-40 bg-black'>Hello</div>
                            <div className='w-40 h-40 bg-black'>Hello</div>
                            <div className='w-40 h-40 bg-black'>Hello</div>

                        </Slider>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default SectionEight