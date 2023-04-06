import { useState } from 'react';
import { createApiEndpoint } from '../services/api';
import { ENDPOINTS } from '../utlis/endpoints';

const useCompany = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getCompanyProfile = async (id) => {
    setLoading(true);
   try {
    const response = await createApiEndpoint(ENDPOINTS.COMPANYPROFILE).fetchById(id)
    const { status, data } = response;
    if (status === 200) {
      setData(data.company);
    }
   } catch (error) {
    setError(error)
   }
    setLoading(false);
  };

  return {
    loading, data,error,
    getCompanyProfile,
  };
};

export default useCompany;
