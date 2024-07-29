let initialState = {};
export const HistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_HISTORY_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};
