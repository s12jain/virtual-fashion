import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter, resetFilters } from '../redux/actions';

const options = ['PAID', 'FREE', 'VIEW_ONLY'];

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleChange = (option) => {
    dispatch(toggleFilter(option));
  };

  return (
    <>
    <div style= {circleContainer}>
      <span style={circleBadge}>1</span>
      <p style={circleText}>Filter by Pricing</p> 
    </div>   
    <div style={containerStyle}>
      <small style={pricingOptionText}>Pricing Options</small>
      <div style={checkboxContainer}>      
        {options.map((option) => (        
          <label key={option} style={labelStyle}>
            <input
              type="checkbox"
              checked={filters.includes(option)}
              onChange={() => handleChange(option)}
              style={{ marginRight: '0.5rem' }}
            />
            {option.replace('_', ' ')}
          </label>
        ))}
      </div>
        <div style={buttonWrapper}>
          <button style={resetButton} onClick={() => dispatch(resetFilters())}>Reset</button>
        </div>      
      </div>
      <div style= {circleContainer}>
        <span style={circleBadge}>2</span>
        <p style={circleText}>Contents List</p> 
      </div> 
    </>
  );
};

export default FilterBar;

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  flexWrap: 'wrap',
  border: "1px solid #99d999",
  borderRadius: "6px"  
};

const checkboxContainer = {
  display: 'flex',
  gap: '1rem',
  flexGrow: '1',
  flexWrap: 'wrap',
};

const buttonWrapper = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexShrink: '0',
};

const labelStyle = {
  cursor: 'pointer',
  userSelect: 'none',
  marginRight: '1rem',
  fontSize: '14px'
};

const resetButton = {
  padding: '0.5rem',
  cursor: 'pointer',
  background: 'none',
  color: '#fff',
  border: 'none',
  marginRight: '1rem'
};
const circleBadge = {
  width: '16px',
  height: '16px',
  backgroundColor: '#99d999',
  color: '#000',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '10px',
  fontWeight: 'bold',
  lineHeight: '1',
  marginRight: '0.5rem'
}
const circleContainer =  {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.25rem',
  maxHeight: '30px',
  marginTop: "1rem"
}
const circleText =  {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#99d999'
}
const pricingOptionText =  {
  fontSize: '10px',
  marginRight: '1rem',
  marginLeft: '1rem'
}
