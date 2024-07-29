import { axiosClient } from "../../DBConfig/Axios/Axios";

export const loginAdmin = (email, password) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return async (dispatch) => {
    try {
      const data = await axiosClient.post(
        `/admin/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: headers,
        }
      );
      if (data.data.success === true) {
        dispatch({ type: "LOGIN", payload: data.data.data });
        localStorage.setItem("token", data.data.data.token);
        localStorage.setItem("userId", data.data.data._id);
        return data.data;
      }
      return data.data;
    } catch (error) {
      return error.response.data;
    }
  };
};

export const logoutAdmin = () => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const headers = {
    Token: token,
    "Content-Type": "application/json",
  };
  return async (dispatch) => {
    try {
      const data = await axiosClient.get(`/admin/logout/${userId}`, {
        headers: headers,
      });
      if (data.data.success === true) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        return data.data;
      }
    } catch (error) {
      return error.response.data;
    }
  };
};
