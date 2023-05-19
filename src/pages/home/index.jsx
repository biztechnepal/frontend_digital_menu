import React, { useEffect, useState } from 'react'
import Page from '../../component/Page'
import { ThemeOne, ThemeTwo } from '../../component/Theme'
import { useLocation, useNavigate } from 'react-router-dom';
import useMenu from '../../hook/useMenu';
import { createApiEndpoint } from '../../services/api';
import { ENDPOINTS } from '../../utlis/endpoints';

function Home() {
  const { search } = useLocation();
  const navigate = useNavigate()
  // const { getCompanyMenuOnly, loading, menuData } = useMenu();
  const [profile, setProfile] = useState(null)
  const [menuData, setMenuData] = useState(null)

  const menuSlug = new URLSearchParams(search).get("menu");
  const companySlug = new URLSearchParams(search).get("company");

  useEffect(() => {
    createApiEndpoint(ENDPOINTS.PUBLICMENU).fetchById(menuSlug, { companySlug: companySlug })
      .then(response => {
        const { status, data } = response;
        if (status === 200) {
          setMenuData(data.menuGroupItems);
          setProfile(data.companyDetails);
        }
      }).catch(error => {
        console.log(error)
      })
  }, [])

  const { themeName } = profile?.theme !== undefined && profile?.theme
  if (themeName === '1') {
    return (
      <>
        <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd" }}>
          <ThemeOne menuData={menuData} profile={profile} />
        </Page>
      </>
    )
  }
  else if (themeName === '2') {
    return (
      <>
        <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd" }}>
          <ThemeTwo menuData={menuData} profile={profile} />
        </Page>
      </>
    )
  }
  else {
    return (<>
      <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd" }}>
        loading. . .
      </Page>
    </>
    )
  }
}

export default Home