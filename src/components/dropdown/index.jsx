import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { service } from '../../data/dataset';

const Dropdown = ( { name }) => {
  const [isHovered, setIsHovered] = useState(false);

  console.log(service)


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative inline-block"
    onMouseLeave={handleMouseLeave}
    >
      <div
        className="cursor-pointer rounded-md hover:text-primaryColor text-gray-600 duration-75 ease-linear gap-1 flex items-center"
        onMouseEnter={handleMouseEnter}
      >
        <p>{name}</p> <IoIosArrowDown style={{ fontSize: '0.75rem' }} />
      </div>
      <div
        className={`absolute z-10 left-0 w-48 shadow-lg rounded-md bg-white overflow-hidden  ${isHovered ? '' : 'hidden'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <div className="p-2">
        {service?.map((item) => {
           return(
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-primaryColor">{item.category}</a>
           )
        })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
