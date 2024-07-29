import { axiosClient } from "../../DBConfig/Axios/Axios";

export const addContacts = (contactData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Token: token,
        "Content-Type": "application/json",
      };
      const data = await axiosClient.post(`/contact/create`, contactData, {
        headers: headers,
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCotactDetails = (paginationData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const { currentPage, limit } = paginationData;
      const data = await axiosClient.get(
        `/contact/get_all_contact?page=${currentPage}&limit=${limit}`,
        {
          headers: headers,
        }
      );

      if (data.data.success === true) {
        return data.data;
      }
    } catch (error) {
      return error.response.data;
    }
  };
};

export const updateDetailContact = (id, contactData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const data = await axiosClient.put(`/contact/update/${id}`, contactData, {
        headers: headers,
      });

      if (data.data.success === true) {
        return data.data;
      }
    } catch (error) {
      return error.response.data;
    }
  };
};

export const singleDetailContact = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const data = await axiosClient.get(`/contact/get_single_contact/${id}`, {
        headers: headers,
      });

      if (data.data.success === true) {
        return data.data;
      }
    } catch (error) {
      return error.response.data;
    }
  };
};

export const deleteDetailContact = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const data = await axiosClient.delete(`/contact/delete/${id}`, {
        headers: headers,
      });

      if (data.data.success === true) {
        return data.data;
      }
    } catch (error) {
      return error.response.data;
    }
  };
};
