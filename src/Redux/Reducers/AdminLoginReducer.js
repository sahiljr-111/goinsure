import { axiosClient } from "../../DBConfig/Axios/Axios";

let initialState = {};

const id = localStorage.getItem("userId");
const token = localStorage.getItem("token");
let count = 0;
const getSingleUserDetail = async () => {
  const data = await axiosClient.get(`/admin/get_single_admin_detail/${id}`, {
    headers: {
      token: token,
    },
  });
  if (data.data.success === true) {
    initialState = data.data.data;
  }
};
if (id && count === 0) {
  getSingleUserDetail();
  count++;
}
export const AdminLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.payload);
    case "SINGLE_USER":
      return (state = action.payload);
    case "LOGOUT":
      return (state = action.payload);
    default:
      return state;
  }
};
