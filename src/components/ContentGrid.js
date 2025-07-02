
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContentGridStyle from './ContentGridStyle.css';

const ContentGrid = () => {
  const [items, setItems] = useState([]);
  const filters = useSelector((state) => state.filters);
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    fetch('https://closet-recruiting-api.azurewebsites.net/api/data')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const filteredItems = items.filter(item => {
    const pricing = item?.pricingOption;
    const matchesPricing =
      filters.length === 0 ||
      (pricing === 0 && filters.includes('PAID')) ||
      (pricing === 1 && filters.includes('FREE')) ||
      (pricing === 2 && filters.includes('VIEW_ONLY'));

    const keyword = searchTerm.toLowerCase();
    const matchesKeyword =
      !keyword ||
      (item.title && item.title.toLowerCase().includes(keyword)) ||
      (item.creator && item.creator.toLowerCase().includes(keyword));

    return matchesPricing && matchesKeyword;
  });

  return (
    <div style={containerBorder}>
      <div className="grid-container" style={{ display: 'grid', gap: '1rem' }}>
      {filteredItems.map((item, index) => (
        <div key={index} style={{ border: '1px solid #262525', padding: '1rem', borderRadius: '8px' }}>
           <img src={item.imagePath} alt={item.title} style={{ width: '100%', maxHeight: '229px' }} />
           <div style={productContainer}>
            <div style={productDetils}>
              <div>{item.creator} <br /> {item.title}</div>
            </div>
            <div style={productPrice}>
              <p>{['PAID', 'FREE', 'VIEW_ONLY'][item.pricingOption]}</p>
            </div>
          </div>
         
        </div>
      ))}
      </div>
    </div>
   
  );
};
const containerBorder = {
  padding: '0.5rem',
  border: '1px solid #99d999',
  borderRadius: '6px'  
};

const productContainer = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  flexWrap: 'wrap'   
};

const productDetils = {
  display: 'flex',
  gap: '1rem',
  flexGrow: '1',
  flexWrap: 'wrap',
  fontSize: '0.75rem'
};

const productPrice = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexShrink: '0',
  textTransform: 'uppercase',
  fontSize: '1rem'
};
export default ContentGrid;
