const initialState = {
  filters: [],
  searchTerm: '',
  content: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return {
        ...state,
        filters: state.filters.includes(action.payload)
          ? state.filters.filter(f => f !== action.payload)
          : [...state.filters, action.payload]
      };
    case 'RESET_FILTERS':
      return {
        ...state,
        filters: []
      };
      case 'SET_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
