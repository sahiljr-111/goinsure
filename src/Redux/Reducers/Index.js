import { combineReducers } from "redux";
import { AdminLoginReducer } from "./AdminLoginReducer";
import { ContactReducer } from "./ContactReducer";
import { PolicyDetailReducer } from "./PolicyDetailReducers";
import { NotesReducers } from "./NotesReducers";
import { PolicyDetailFileReducer } from "./PolicyDetailFileReducers";
import { HistoryReducer } from "./HistoryReducer";

const reducers = combineReducers({
  loginUser: AdminLoginReducer,
  contactData: ContactReducer,
  policyDetailData: PolicyDetailReducer,
  NotesData: NotesReducers,
  policyDetailFileData: PolicyDetailFileReducer,
  historyData: HistoryReducer,
});

export default reducers;
