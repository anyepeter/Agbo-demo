import React, { useState } from 'react';
import { Header } from '../../layout/header';
import GoogleSearch from '../../features/googleMap/searchMap';
import { MdLocationPin, MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './styleSearch.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import ReactPaginate from 'react-paginate';
import { useUser } from '@clerk/clerk-react';
import { XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FilterSearch = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    location: '',
    region: ''
  });
  const location = useLocation();
  const navigate = useNavigate();
  const services = useSelector(state => state.data.data)
  const category = useSelector(state => state.data.type)
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
    const filteredService = services.filter(item => {
      return (!formData.category || item.category === formData.category) &&
             (!formData.region || item.title.includes(formData.region)) 
    });
    setIsLoading(false); 
    navigate(`/filter/search/:${encodeURIComponent(JSON.stringify(filteredService))}/results`, { state: { filteredService } });
  }, 1000);
  };

  const { filteredService } = location.state;

    const { t } = useTranslation()
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

    const endOffset = itemOffset + 3;
    const currentItems = filteredService.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredService.length / 3);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 3) % filteredService.length;
      setItemOffset(newOffset);
    };

  return (
  <>
  <Header />
  <section className='w-full '>
    <main  className=' mt-[80px]'>
    <div className=" lg:fixed  lg:w-[50%] lg:top-[80px]">
      
      {/* googleMap */}

      <GoogleSearch service={currentItems}/>
        
      </div>
      <div className='w-full  pt-4 flex justify-end overflow-x-hidden'>
        <div className=" lg:w-[50%] md:p-4">
          {/* search form */}
          <div className='w-full'>
             <div className='w-full flex justify-center bg-secondaryColor p-8'>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col max-w-4xl justify-center gap-4"
      >
        <div className='w-full flex flex-col  gap-4'>
            <div className='flex gap-4 w-full'>
                <div className=" md:w-[300px] w-full ">
                <label htmlFor="category" className="sr-only">
                    Category
                </label>
                <select
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full h-12 pl-4 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                >
                    <option value="">{t('AllCategory')}</option>
                    {
                      category?.map((items) => (
                        <option key={items.id} value={items.category}>{t(items.category)}</option>
                      ))
                    }
                </select>
                </div>
                <div className="w-full">
                <label htmlFor="category" className="sr-only">
                    addfree
                </label>
                <select
                    id="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full h-12 pl-4 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                >
                    <option value="">{t('EnterCity')}</option>
                    <option value="Yaounde">Yaounde</option>
                    <option value="Bamenda">Bamenda</option>
                    <option value="sports">Sports</option>
                    <option value="home">Home</option>
                </select>
                </div>
            </div>
            <div className='w-full'>
                <div className="w-full">
                <label htmlFor="location" className="sr-only">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full h-12 pl-4 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder={t('TitleForm')}
                />
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col gap-4 md:flex-row'>
        <div className=" w-full md:max-w-[400px]">
          <label htmlFor="title" className="sr-only">Title</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full h-12 pl-4 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder={t('Quarter')}
          />
        </div>
        <div className="w-full">
        <button
          disabled={isLoading}
            type="submit"
            className="w-full h-12 bg-primaryColor flex justify-center items-center text-white font-bold py-2 px-4 rounded self-end"
          >
           {isLoading ?  <Loader2 color="white"  className='animate-spin' /> : t('formSearch')}
          </button>
        </div>
        </div>
      </form>
    </div>
          </div>


          {/* Cards */} 
          <div>
          <div style={{ display: open ? 'flex' : 'none', transition: 'all ease-in 0.2s' }} className='justify-center items-center py-4 w-full h-screen fixed z-50 top-0 left-0 right-0 bottom-0 bg-opacity-90 bg-black '>
                    <div className=' w-80 bg-white relative rounded-2xl pt-6 p-4 flex flex-col justify-between items-center gap-2 '>
                        <XCircle className='absolute top-1 right-1 cursor-pointer' onClick={handleClose} />
                        <h1 className='text-4xl font-comfortaa font-[900]'>Sign Up today!</h1>
                        <p className='font-muli text-center pr-8 pl-8 text-opacity-50 text-black leading-tight'>Sign up today in other to see all the services in details</p>
                        <Link to={'/sign-in'} className='bg-primaryColor w-full p-4 text-center text-white rounded-2xl leading-tight mt-2 hover:bg-white'>Sign Up</Link>
                    </div>
                </div>
          <section className='w-full flex flex-col gap-2 justify-center bg-white pt-4 md:p-0 md:pt-4 '>
            <div  className='flex w-full justify-center font-comfortaa font-extrabold items-center'>Results<span>({filteredService.length})</span></div>
            <div className='w-full  grid grid-cols-1  gap-8 ' >

                {
                    currentItems && currentItems?.map((service) => (
                        <div key={service.id} className='w-full flex border-none justify-between  bg-black shadow-box'>
                        <div className='w-full border-none relative'>
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
      <h1 className='absolute top-1 z-30 left-1 p-1 bg-primaryColor rounded-md text-white'>{t(service.category)}</h1>
                        </div>
                        <div className='w-full bg-white border-none flex flex-col justify-between gap-1 md:gap-2'>
                            <h1 onClick={() => handleTitleClick(service)} className='z-full pt-1  pl-2 pr-2 md:pt-4 md:pl-4 text-sm md:text-lg font-bold hover:text-primaryColor cursor-pointer hover:transition-colors hover:duration-300 transition-colors duration-300 truncates-title'>{service.title}</h1>
                            <p className='z-full pl-2 flex items-center pr-2 md:pl-4 mb-2 text-sm' ><MdLocationPin className='text-primaryColor' style={{ fontSize: '1rem' }} /> <span className='truncates-title'>{service.location.description}</span></p>
                            <div className='w-full bg-secondaryColor p-2'>
                                <p className='w-full truncates text-xs md:text-sm'>{t(service.description)}
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
                  <div className='flex mb-6 md:mb-8 w-full justify-center items-center'>
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
            </div>
          </section>
          </div>
        </div>
      
      </div>
    </main>
  </section>
  </>
);
  }


export default FilterSearch;
