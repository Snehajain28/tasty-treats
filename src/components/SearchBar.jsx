import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchBar() {

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestion] = useState([]);
  const navigate = useNavigate();


  const sendQuery = (data) => {
    navigate(`/${data}`)
    setSuggestion([]);
    setQuery('');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendQuery(query);
    }
  };
  const handleChange = async (event) => {
    setQuery(event.target.value);
    if (event.target.value === '') {
      setSuggestion([]);
      return;
    }
    const res = await axios.get(`https://api.edamam.com/auto-complete?q=${event.target.value}&limit=6`)
    setSuggestion(res.data)
  };

  return (
    <div className='w-[90vw] md:w-[60rem] flex flex-col mt-[1.5rem] md:mt-3 mb-[1.5rem] mx-auto'>
      <div className='flex border-[2px] rounded-lg  '>
          <input
        type='text'
        placeholder='Search For meal ?'
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={query}
        className=' border-none md:w-9/12 w-11/12 h-[3.4rem] lg:h-[4rem] px-4 flex justify-center  mx-auto'
      />
      <button className='bg-orange-600 text-white font-semibold px-2 text-[1rem]'
      >Search</button>
      </div>
      <div className=' bg-white w-full shadow-lg rounded-xl'>
        {
          suggestions.length > 0 &&
          <div className='absoulte ' >
            {
              suggestions.map((data) => (
                <p onClick={() => {
                  sendQuery(data);
                }}
                  className='p-2 px-4 hover:bg-gray-100 text-[1rem] font-semibold'>{data}</p>
              ))
            }
          </div>
        }
      </div>
    </div >
  )
}

export default SearchBar
