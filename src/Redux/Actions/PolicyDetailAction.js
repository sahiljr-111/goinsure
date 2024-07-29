import { axiosClient } from "../../DBConfig/Axios/Axios";

export const getSingleContactPolicyDetailData = (
  id,
  currentPage,
  limit,
  activePolicyTab
) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const data = await axiosClient.get(
        `/policy/detail/get_all_by_contact_id/${id}?page=${currentPage}&limit=${limit}&type=${activePolicyTab}`,
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

export const createPolicyDetailforSingleContact = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosClient.post(`/policy/detail/create`, data, {
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

export const updatePolicyDetailforSingleContact = (id, data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const headers = {
      Token: token,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosClient.put(
        `/policy/detail/update/${id}`,
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

export const deleteSinglePolicyDetail = (id) => {
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
