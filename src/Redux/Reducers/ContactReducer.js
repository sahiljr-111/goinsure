let initialState = {};
export const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACT":
      return (state = action.payload);
    default:
      return state;
  }
};
