export const toggleFilter = (filter) => ({
  type: 'TOGGLE_FILTER',
  payload: filter
});

export const resetFilters = () => ({
  type: 'RESET_FILTERS'
});

export const setSearchTerm = (term) => ({
  type: 'SET_SEARCH_TERM',
  payload: term,
});

