import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


const Dropdown = ( { name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const category  = useSelector(state => state.data.type)
  const services = useSelector(state => state.data.data)


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCategory = (e) => {
    const filteredService = services.filter(item => {
      return (!e || item.category === e)
    });
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}/filter/search/results?data=${encodeURIComponent(JSON.stringify(filteredService))}`;
  }

  return (
    <div className="relative inline-block"
    onMouseLeave={handleMouseLeave}
    >
      <div
        className="cursor-pointer rounded-md hover:text-primaryColor text-gray-600 transition-colors duration-150 ease-in-out gap-1 flex items-center"
        onMouseEnter={handleMouseEnter}
      >
        <p>{name}</p> <IoIosArrowDown style={{ fontSize: '0.75rem' }} />
      </div>
      <div
        className={`absolute z-10 left-0 w-48 shadow-lg rounded-md bg-white overflow-hidden  ${isHovered ? '' : 'hidden'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <div className="">
        {category?.map((item) => {
           return(
            <p onClick={() => handleCategory(item.category)} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-primaryColor cursor-pointer">{item.category}</p>
           )
        })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
