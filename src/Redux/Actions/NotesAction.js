import { axiosClient } from "../../DBConfig/Axios/Axios";

export const getSingleContactNotesData = (id, currentPage, limit) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const data = await axiosClient.get(
        `/note/get_all_notes/${id}?page=${currentPage}&limit=${limit}`,
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

export const createNotesforSingleContact = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosClient.post(`/note/create`, data, {
        headers: headers,
      });
      if (response.data.success === true) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateNotesforSingleContact = (id, data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosClient.put(`/note/update/${id}`, data, {
        headers: headers,
      });
      if (response.data.success === true) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteSingleNotes = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosClient.put(`/policy/detail/delete/${id}`, {
        headers: headers,
      });
      if (response.data.success === true) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
};
