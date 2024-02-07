import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../App.css'

const bgImg = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "200px"
  };

  

const CardContainer = () => {
    return(
        <>
          <section className='w-full flex justify-center bg-white p-4'>
            <div className='w-full md:max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:pl-8 md:pr-8' >
                <div className='w-full flex border-none md:flex-col bg-black shadow-box'>
                    <div className='w-full border-none '>
  <AwesomeSlider
  organicArrows={false}
  buttonContentRight={<p className='buttonStyle'>{">"}</p>}
  buttonContentLeft={<p  className='buttonStyle '>{"<"}</p>}
  bullets={false}
className=' awesomeHigh'
  >
      <div>
          <img
            className='bgImg'
            alt="Wow"
            src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
          />
      </div>
      <div>
          <img
            className='bgImg'
            alt="Wow"
            src=""
          />
      </div>
      <div>
          <img
            className='bgImg'
            alt="Wow"
            src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
          />
      </div>
  </AwesomeSlider>
                    </div>
                    <div className='w-full bg-white border-none flex flex-col gap-1 md:gap-2'>
                        <h1 className='z-full pt-1 md:pt-2 pl-2 pr-2 md:pt-4 md:pl-4 text-sm md:text-lg font-bold'>Title</h1>
                        <p className='z-full pl-2 flex items-center  pr-2 md:pl-4 mb-2 text-sm' > <MdLocationPin style={{ fontSize: '1rem' }} className='text-primaryColor' /> location</p>
                        <div className='w-full bg-secondaryColor p-2'>
                            <p className='w-full truncates text-xs md:text-sm'>description ds dsds yufds Set the height of the paragraph description ds dsds yufds Set the height of the paragraph to three line-heigths. Like -f
                            </p>
                        </div>
                        <div className='self-end mt-2 mb-2 flex pr-2'>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor'/>

                        </div>
                    </div>
                </div>

                <div className='w-full flex border-none md:flex-col bg-black shadow-box'>
                    <div className='w-full border-none '>
                    <AwesomeSlider
                    organicArrows={false}
                    buttonContentRight={<p className='buttonStyle'>{">"}</p>}
                    buttonContentLeft={<p  className='buttonStyle '>{"<"}</p>}
                    bullets={false}
                    className=' awesomeHigh'
                    >
                        <div>
                            <img
                                className='bgImg'
                                alt="Wow"
                                src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                            />
                        </div>
                        <div>
                            <img
                                className='bgImg'
                                alt="Wow"
                                src=""
                            />
                        </div>
                        <div>
                            <img
                                className='bgImg'
                                alt="Wow"
                                src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                            />
                        </div>
                    </AwesomeSlider>
                    </div>
                    <div className='w-full bg-white border-none flex flex-col gap-1 md:gap-2'>
                        <h1 className='z-full pt-1 md:pt-2 pl-2 pr-2 md:pt-4 md:pl-4 text-sm md:text-lg font-bold'>Title</h1>
                        <p className='z-full pl-2 flex items-center  pr-2 md:pl-4 mb-2 text-sm' > <MdLocationPin style={{ fontSize: '1rem' }} className='text-primaryColor' /> location</p>
                        <div className='w-full bg-secondaryColor p-2'>
                            <p className='w-full truncates text-xs md:text-sm'>description ds dsds yufds Set the height of the paragraph description ds dsds yufds Set the height of the paragraph to three line-heigths. Like -f
                            </p>
                        </div>
                        <div className='self-end mt-2 mb-2 flex pr-2'>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor'/>

                        </div>
                    </div>
                </div>
                
                <div className='w-full flex border-none md:flex-col bg-black  shadow-box'>
                    <div className='w-full border-none '>
                    <AwesomeSlider
                    organicArrows={false}
                    buttonContentRight={<p className='buttonStyle'>{">"}</p>}
                    buttonContentLeft={<p  className='buttonStyle '>{"<"}</p>}
                    bullets={false}
                    className=' awesomeHigh'
                    >
                        <div>
                            <img
                                className='bgImg'
                                alt="Wow"
                                src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                            />
                        </div>
                        <div>
                            <img
                                className='bgImg'
                                alt="Wow"
                                src=""
                            />
                        </div>
                        <div>
                            <img
                                className='bgImg'
                                alt="Wow"
                                src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                            />
                        </div>
                    </AwesomeSlider>
                    </div>
                    <div className='w-full bg-white border-none flex flex-col gap-1 md:gap-2 '>
                        <h1 className='z-full pt-1 md:pt-2 pl-2 pr-2 md:pt-4 md:pl-4 text-sm md:text-lg font-bold'>Title</h1>
                        <p className='z-full pl-2 flex items-center  pr-2 md:pl-4 mb-2 text-sm' > <MdLocationPin style={{ fontSize: '1rem' }} className='text-primaryColor' /> location</p>
                        <div className='w-full bg-secondaryColor p-2'>
                            <p className='w-full truncates text-xs md:text-sm'>description ds dsds yufds Set the height of the paragraph description ds dsds yufds Set the height of the paragraph to three line-heigths. Like -f
                            </p>
                        </div>
                        <div className='self-end mt-2 mb-2 flex pr-2'>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor'/>

                        </div>
                    </div>
                </div>
            
                <div className='w-full flex border-none md:flex-col bg-black shadow-box'>
                    <div className='w-full border-none '>
                    <AwesomeSlider
                    organicArrows={false}
                    buttonContentRight={<p className='buttonStyle'>{">"}</p>}
                    buttonContentLeft={<p  className='buttonStyle '>{"<"}</p>}
                    bullets={false}
                    className=' awesomeHigh'
                    >
                        <div>
                            <img
                                className='bgImg'
                                alt="Wow"
                                src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                            />
                        </div>
                        <div>
                            <img
                                className='bgImg'
                                alt="Wow"
                                src=""
                            />
                        </div>
                        <div>
                            <img
                                className='bgImg'
                                alt="Wow"
                                src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                            />
                        </div>
                    </AwesomeSlider>
                    </div>
                    <div className='w-full bg-white border-none flex flex-col gap-1 md:gap-2'>
                        <h1 className='z-full pt-1 md:pt-2 pl-2 pr-2 md:pt-4 md:pl-4 text-sm md:text-lg font-bold'>Title</h1>
                        <p className='z-full pl-2 flex items-center  pr-2 md:pl-4 mb-2 text-sm' > <MdLocationPin style={{ fontSize: '1rem' }} className='text-primaryColor' /> location</p>
                        <div className='w-full bg-secondaryColor p-2'>
                            <p className='w-full truncates text-xs md:text-sm'>description ds dsds yufds Set the height of the paragraph description ds dsds yufds Set the height of the paragraph to three line-heigths. Like -f
                            </p>
                        </div>
                        <div className='self-end mt-2 mb-2 flex pr-2'>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStar style={{ fontSize: '1rem' }} className='text-primaryColor'/>
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor' />
                        <MdStarBorder style={{ fontSize: '1rem' }} className='text-primaryColor'/>

                        </div>
                    </div>
                </div>
            </div>
          </section>
        </>
    )
}

export default CardContainer