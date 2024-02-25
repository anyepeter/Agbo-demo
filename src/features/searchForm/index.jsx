import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    location: '',
    region: ''
  });
  const navigate = useNavigate();
  const service = useSelector(state => state.data.data)
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
    const filteredService = service.filter(item => {
      return (!formData.category || item.category === formData.category) &&
             (!formData.region || item.title.includes(formData.region)) 
    });
    setIsLoading(false); 
    navigate(`/filter/search/:${encodeURIComponent(JSON.stringify(filteredService))}/results`, { state: { filteredService } });
  }, 1000);
  };

  return (
    <div className='w-full flex justify-center bg-secondaryColor p-8'>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col max-w-4xl justify-center gap-4"
      >
        <div className='w-full flex flex-col md:flex-row gap-4'>
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
                    <option value="Yaounde">Yaounde</option>
                    <option value="">Fashion</option>
                    <option value="">Sports</option>
                    <option value="">Home</option>
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
  );
};

export default SearchForm;
