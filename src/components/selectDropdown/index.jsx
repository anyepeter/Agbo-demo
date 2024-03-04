import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'En');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    closeDropdown();
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="cursor-pointer rounded-md font-bold flex items-center gap-1"
        onClick={openDropdown}
      >
        {selectedLanguage} <IoIosArrowDown style={{ fontSize: '0.75rem' }}/>
      </button>
      {isDropdownOpen && (
        <div className="absolute z-50 -left-[20px] mt-2 w-auto bg-white shadow-lg rounded-md overflow-hidden">
          <p
            className={`block px-4 py-2 text-gray-800 hover:text-primaryColor hover:bg-gray-200 ${selectedLanguage === 'En' ? 'font-bold' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </p>
          <p
            className={`block px-4 py-2 text-gray-800 hover:text-primaryColor hover:bg-gray-200 ${selectedLanguage === 'Fn' ? 'font-bold' : ''}`}
            onClick={() => handleLanguageChange('fn')}
          >
            French
          </p>
          <p
            className={`block px-4 py-2 text-gray-800 hover:text-primaryColor hover:bg-gray-200 ${selectedLanguage === 'sp' ? 'font-bold' : ''}`}
            onClick={() => handleLanguageChange('sp')}
          >
            Spanish
          </p>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
