import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createApiEndpoint } from '../services/api';
import { ENDPOINTS } from '../utlis/endpoints';

const usePopups = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  const getPopups = async () => {
    setLoading(true);
    const response = await createApiEndpoint(ENDPOINTS.POPUPS).all()
    const { status, data } = response;
    if (status === 200) {
      setData(data.data);
    } else {
      navigate('/error')
    }
    setLoading(false);
  };

  return {
    loading, data,
    getPopups,
  };
};

export default usePopups;
