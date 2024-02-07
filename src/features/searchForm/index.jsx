import React, { useState } from 'react';

const SearchForm = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle search query here
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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-12 pl-10 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                >
                    <option value="">All categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="sports">Sports</option>
                    <option value="home">Home</option>
                </select>
                </div>
                <div className="w-full">
                <label htmlFor="category" className="sr-only">
                    addfree
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
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
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-12 pl-10 pr-4 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Quarter"
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full h-12 bg-primaryColor  text-white font-bold py-2 px-4 rounded self-end"
          >
            Search
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
