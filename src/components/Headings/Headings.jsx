import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Headings.styles';

const Headings = ({title}) => (
  <>
     <div className='w-full flex flex-col  '>
      <p>{title}</p>

      <hr className='mt-4 h-[2px] border-none bg-primaryColor w-24' />

      <hr className='mb-4 mt-2 h-[2px] border-none bg-primaryColor w-12' />
     </div>
  </>
);

Headings.propTypes = {
  // bla: PropTypes.string,
};

Headings.defaultProps = {
  // bla: 'test',
};

export default Headings;
