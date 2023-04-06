import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createApiEndpoint } from '../services/api';
import { ENDPOINTS } from '../utlis/endpoints';

const useMenu = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  const getCompanyMenuOnly = async (id) => {
    setLoading(true);
    const response = await createApiEndpoint(ENDPOINTS.COMPANYMENU).fetchById(id)
    const { status, data } = response;
    if (status === 200) {
      setData(data.menuItemGroups);
    } else {
      navigate('/error')
    }
    setLoading(false);
  };

  return {
    loading, data,
    getCompanyMenuOnly,
  };
};

export default useMenu;
