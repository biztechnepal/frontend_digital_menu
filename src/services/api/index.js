import axiosInstance from "../../utlis/axios";

const BASE_URL = import.meta.env.VITE_APP_HOST_API_KEY || '';
export const createApiEndpoint = (endpoints) => {
  const url = `${BASE_URL}/${endpoints}`

  return {
    paramsFetch: (params) =>
      axiosInstance.get(url, {
        params: { ...params }
      }),
    fetchById: (id, params) => axiosInstance.get(
      `${url}/${id}`, { params: { ...params } }
    ),
    fetchImage: id => axiosInstance.get(`${url}/${id}`, {
      responseType: 'blob'
    }),
    all: () => axiosInstance.get(url),
    update: (id, updatedRecord) => axiosInstance.put(
      `${url}/${id}`,
      updatedRecord
    ),
    delete: id => axiosInstance.delete(
      `${url}/${id}`
    ),

  }
}
