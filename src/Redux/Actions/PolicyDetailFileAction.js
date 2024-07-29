import { axiosClient } from "../../DBConfig/Axios/Axios";

export const getSingleContactPolicyFileData = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const data = await axiosClient.get(`/policy/detail/file/all/${id}`, {
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

export const createPolicyFileforSingleContact = (formData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "multipart/form-data",
    };
    try {
      const response = await axiosClient.post(
        `/policy/detail/file/create`,
        formData,
        {
          headers: headers,
        }
      );
      if (response.data.success === true) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePolicyDetailFile = (id, data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosClient.put(
        `/policy/detail/file/update/${id}`,
        data,
        {
          headers: headers,
        }
      );
      if (response.data.success === true) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteSinglePolicyDetailFile = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosClient.put(`/policy/detail/file/${id}`, {
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

export const findDublicatePolicyNumber = (policyNumber) => {
  return async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosClient.get(
        `/policy/detail/search/dublicate?policyNumber=${policyNumber}`,
        {
          headers: headers,
        }
      );
      if (response.data.success === true) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
};
