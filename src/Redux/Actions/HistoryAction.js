import { axiosClient } from "../../DBConfig/Axios/Axios";

export const getSingleContactHistoryData = (id,openTab, currentPage, limit) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const data = await axiosClient.get(
        `/history/get_all_history_single_contact/${id}?page=${currentPage}&limit=${limit}&tab=${openTab}`,
        {
          headers: headers,
        }
      );
      if (data.data.success === true) {
        return data.data;
        // dispatch({ type: "POLICY_DETAIL_DATA", payload: data.data.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const globalSearchData = (search) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const data = await axiosClient.get(`/global/search?search=${search}`, {
        headers: headers,
      });
      if (data.data.success === true) {
        return data.data;
        // dispatch({ type: "POLICY_DETAIL_DATA", payload: data.data.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
