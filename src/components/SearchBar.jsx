import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/TodoSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input className='rounded-md w-[340px] h-[40px] p-[10px] outline-none bg-[#333] text-[white]'
      type="text"
      placeholder="Search tasks..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
