import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createApiEndpoint } from '../services/api';
import { ENDPOINTS } from '../utlis/endpoints';

const useMenu = () => {
  const [loading, setLoading] = useState(false);
  const [menuData, setMenuData] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate()
  // 6441426f234f361402ad2e7d
  // c
  // 643e44130a4d8d09d656d216
  const getCompanyMenuOnly = async ({ menuId, companyId }) => {
    setLoading(true);
    const response = await createApiEndpoint(ENDPOINTS.PUBLICMENU).fetchById(menuId, {companySlug: companyId})
    const { status, data } = response;
    if (status === 200) {
      setMenuData(data.menuGroupItems);
      setProfile(data.companyDetails);
    } else {
      navigate('/error')
    }
    setLoading(false);
  };

  return {
    loading, menuData,profile,
    getCompanyMenuOnly,
  };
};

export default useMenu;
