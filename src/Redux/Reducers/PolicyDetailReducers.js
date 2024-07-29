let initialState = {};
export const PolicyDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POLICY_DETAIL_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};
