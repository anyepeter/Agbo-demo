import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../App.css'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

  

const CardContainer = () => {
    const services = useSelector(state => state.data.data); 
    const navigate = useNavigate();
    const { t } = useTranslation()
    const handleTitleClick = (service) => {
        navigate(`/:${service.title}`, { state: { service } });
    };

    return(
        <>
          <section className='w-full flex justify-center bg-white p-4'>
            <div className='w-full md:max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:pl-8 md:pr-8' >

                {
                    services?.map((service) => (
                        <div key={service.id} className='w-full flex border-none md:flex-col bg-black shadow-box'>
                        <div className='w-full border-none '>
      <AwesomeSlider
      organicArrows={false}
      buttonContentRight={<p className='buttonStyle'>{">"}</p>}
      buttonContentLeft={<p  className='buttonStyle '>{"<"}</p>}
      bullets={false}
    className=' awesomeHigh'
      >
        
            {service.images?.map((image, index) => (
                <div>
                              <img key={index}
                              className='bgImg'
                              alt="Wow"
                              src={image}
                            />
                </div>
            ))}
          
        
      </AwesomeSlider>
                        </div>
                        <div className='w-full bg-white border-none flex flex-col gap-1 md:gap-2'>
                            <h1 onClick={() => handleTitleClick(service)} className='z-full pt-1 md:pt-2 pl-2 pr-2 md:pt-4 md:pl-4 text-sm md:text-lg font-bold hover:text-primaryColor cursor-pointer hover:transition-colors hover:duration-300 transition-colors duration-300'>{service.title}</h1>
                            <p className='z-full pl-2 flex items-center  pr-2 md:pl-4 mb-2 text-sm' > <MdLocationPin style={{ fontSize: '1rem' }} className='text-primaryColor' /> {service.location.description}</p>
                            <div className='w-full bg-secondaryColor p-2'>
                                <p className='w-full truncates text-xs md:text-sm'>{service.description}
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
                    ) )
                }
            </div>
          </section>
        </>
    )
}

export default CardContainer