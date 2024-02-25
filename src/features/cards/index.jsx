import React, { useState } from 'react';
import { MdLocationPin } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../App.css'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { XCircle } from 'lucide-react';
import ReactPaginate from 'react-paginate';

  
const CardContainer = () => {
    const [open, setOpen] = useState(false);
    const services = useSelector(state => state.data.data); 
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { user } = useUser();


    const handleTitleClick = (service) => {
        if (user) {
            navigate(`/:${service.title}`, { state: { service } });
        } else {
            setOpen(true)
        }
    };

    const handleClose = () => {
        setOpen(false);
    }

    const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 9;
  const currentItems = services.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(services.length / 9);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % services.length;
    setItemOffset(newOffset);
  };

    return(
        <>
          <section className='w-full flex justify-center bg-white p-4 mb-6 md:mb-12'>
            <div className='w-full md:max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:pl-8 md:pr-8' >

                {
                    currentItems && currentItems?.map((service) => (
                        <div key={service.id} className='w-full flex border-none md:flex-col bg-black shadow-box'>
                        <div className='w-full border-none relative top-0 left-0'>
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
      <h1 className='absolute top-1 z-30 left-1 p-1 bg-primaryColor rounded-md text-white bg-opacity-75'>{service.category}</h1>
                        </div>
                        <div className='w-full bg-white border-none flex flex-col justify-between gap-1 md:gap-2'>
                            <h1 onClick={() => handleTitleClick(service)} className='z-full pt-1 md:pt-2 pl-2 pr-2 md:pt-4 md:pl-4 text-sm md:text-lg font-bold hover:text-primaryColor cursor-pointer hover:transition-colors hover:duration-300 transition-colors duration-300 truncates-location'>{service.title}</h1>
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

                <div style={{ display: open ? 'flex' : 'none', transition: 'all ease-in 0.2s' }} className='justify-center items-center py-4 w-full h-screen fixed z-50 top-0 left-0 right-0 bottom-0 bg-opacity-90 bg-black '>
                    <div className=' w-80 bg-white relative rounded-2xl pt-6 p-4 flex flex-col justify-between items-center gap-2 '>
                        <XCircle className='absolute top-1 right-1 cursor-pointer' onClick={handleClose} />
                        <h1 className='text-4xl font-comfortaa font-[900]'>Sign Up today!</h1>
                        <p className='font-muli text-center pr-8 pl-8 text-opacity-50 text-black leading-tight'>Sign up today in other to see all the services in details</p>
                        <Link to={'/sign-in'} className='bg-primaryColor w-full p-4 text-center text-white rounded-2xl leading-tight mt-2 hover:bg-white'>Sign Up</Link>
                    </div>
                </div>
            </div>
          </section>
          <div className='flex mb-12 md:mb-20 w-full justify-center items-center'>
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className='flex text-primaryColor justify-center border'
        activeClassName='bg-primaryColor text-white'
        pageClassName='p-2 boder-line'
        previousClassName='p-2 boder-line' 
        breakClassName='p-2'
        nextClassName='p-2 '
      />
      </div>
        </>
    )
}

export default CardContainer