const initialState = {
  nameFilter: "",
  rateFilter: 0
};

const titleFilterReducer = (state = initialState, action) => {
  if (action.type === "SET_TITLE_FILTER") {
    state.nameFilter = action.titleFilter;
    return {...state};
  }
  return state;
};
export default titleFilterReducer;
