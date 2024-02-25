import React, { useState } from 'react';
import { Header } from '../../layout/header';
import GoogleSearch from '../../features/googleMap/searchMap';
import { MdLocationPin, MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../FilterSearch/styleSearch.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import ReactPaginate from 'react-paginate';

const CategoryFilter = () => {

  const [formData, setFormData] = useState({
    category: '',
    title: '',
    location: '',
    region: ''
  });
  const location = useLocation()
  const navigate = useNavigate();
  const services = useSelector(state => state.data.data)
  const category = useSelector(state => state.data.type)

  const [isLoading, setIsLoading] = useState(false);

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

  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get('data');

  let filteredService;
  try {
    filteredService = data ? JSON.parse(decodeURIComponent(data)) : [];
  } catch (error) {
    console.error('Error parsing data from URL:', error);
    filteredService = [];
  }

  const { t } = useTranslation()
  const handleTitleClick = (service) => {
        navigate(`/:${service.title}`, { state: { service } });
  };

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
    <main  className=''>
    <div className=" lg:fixed  lg:w-[50%] lg:top-[h-header]">
      
      {/* googleMap */}

      <GoogleSearch />
        
      </div>
      <div className='w-full h-[80vh] lg:h-[90vh] pt-4  flex justify-end overflow-x-hidden'>
        <div className=" lg:w-[50%] p-4">


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
                    className="w-full h-12 pl-10 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                >
                    <option value="">All categories</option>
                    {
                      category?.map((items) => (
                        <option key={items.id} value={items.category}>{items.category}</option>
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
                    className="w-full h-12 pl-10 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                >
                    <option value="">Enter city</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
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
                    className="w-full h-12 pl-10 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Title"
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
            className="w-full h-12 pl-10 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Quarter"
          />
        </div>
        <div className="w-full">
        <button
          disabled={isLoading}
            type="submit"
            className="w-full h-12 bg-primaryColor flex justify-center items-center text-white font-bold py-2 px-4 rounded self-end"
          >
           {isLoading ?  <Loader2 color="white"  className='animate-spin' /> : "Search"}
          </button>
        </div>
        </div>
      </form>
    </div>
          </div>


          {/* Cards */} 
          <div>
          <section className='w-full flex justify-center bg-white p-4'>
            <div className='w-full  grid grid-cols-1  gap-8 ' >

                {
                  currentItems &&  currentItems?.map((service) => (
                        <div key={service.id} className='w-full flex border-none justify-between  bg-black shadow-box'>
                        <div className='w-full border-none relative top-0'>
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
                            <h1 onClick={() => handleTitleClick(service)} className='z-full pt-1  pl-2 pr-2 md:pt-4 md:pl-4 text-sm md:text-lg font-bold hover:text-primaryColor cursor-pointer hover:transition-colors hover:duration-300 transition-colors duration-300 truncates-title'>{service.title}</h1>
                            <p className='z-full pl-2 flex items-center truncates-title pr-2 md:pl-4 mb-2 text-sm' > <MdLocationPin className='text-primaryColor' style={{ fontSize: '1rem' }} /> {service.location.description}</p>
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


export default CategoryFilter;
