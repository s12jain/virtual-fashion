import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Found the item you are looking for"
        style={{
          color: searchTerm.length > 0 ? 'white' : 'black', // color update when typing
          width: '100%',
          padding: '0.75rem',
          background: 'rgb(66 65 65)',
          border: 'none',
          boxSizing: 'border-box'
        }}       
      />
    </div>
  );
};

export default SearchBar;

const containerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  boxSizing: 'border-box',
};