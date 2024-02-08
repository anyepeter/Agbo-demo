import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../layout/header';
import GoogleMap from '../../features/googleMap';
import SearchForm from '../../features/searchForm';
import Headings from '../../components/Headings/Headings';
import CardContainer from '../../features/cards';
import Footer from '../../layout/footer';
//import { Test } from './HomePage.styles';

const HomePage = (props) => (
  <>
  <Header />
  <GoogleMap />
  <SearchForm />
  <div className='w-full flex justify-center items-center'>
  <div className='w-full flex flex-col justify-center  items-center'>
      <p>Services</p>

      <hr className='mt-4 h-[2px] border-none bg-primaryColor w-24' />

      <hr className='mb-4 mt-2 h-[2px] border-none bg-primaryColor w-12' />
     </div>
  </div>
  <CardContainer />
  <Footer />
  </>
);

HomePage.propTypes = {
  // bla: PropTypes.string,
};

HomePage.defaultProps = {
  // bla: 'test',
};

export default HomePage;
