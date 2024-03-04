import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../layout/header';
import GoogleMap from '../../features/googleMap';
import SearchForm from '../../features/searchForm';
import CardContainer from '../../features/cards';
import Footer from '../../layout/footer';
import { useTranslation } from 'react-i18next';


const HomePage = () => {
  const { t } = useTranslation()
  return(
    <>
    <Header />
    <div className='mt-[80px]'>
    <GoogleMap />
    </div>
    <SearchForm />
    <div className='w-full flex justify-center items-center mt-10'>
    <div className='w-full flex flex-col justify-center  items-center'>
        <p className='font-comfortaa font-extrabold text-1xl md:text-3xl'>{t('servicesTitle')}</p>
  
        <hr className='mt-4 h-[2px] border-none bg-primaryColor w-24' />
  
        <hr className='mb-4 mt-2 h-[2px] border-none bg-primaryColor w-12' />
       </div>
    </div>
    <CardContainer />
    <Footer />
    </>
  )
}
 
HomePage.propTypes = {
  // bla: PropTypes.string,
};

HomePage.defaultProps = {
  // bla: 'test',
};

export default HomePage;
