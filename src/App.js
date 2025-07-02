import React from 'react';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import ContentGrid from './components/ContentGrid';

const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <FilterBar />      
      <ContentGrid />
    </div>
  );
};

export default App;
