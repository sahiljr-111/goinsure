let initialState = {};
export const NotesReducers = (state = initialState, action) => {
  switch (action.type) {
    case "NOTES_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};
NotesReducers