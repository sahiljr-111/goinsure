let initialState = {};
export const PolicyDetailFileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POLICY_DETAIL_FILE_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};
