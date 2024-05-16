import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Page from '../../component/Page';
import { ThemeOne, ThemeThree, ThemeTwo } from '../../component/Theme';
import { createApiEndpoint } from '../../services/api';
import { ENDPOINTS } from '../../utlis/endpoints';
import { menuData } from '../../mockdata';

function Home() {
  const { search } = useLocation();
  const navigate = useNavigate();
  // const { getCompanyMenuOnly, loading, menuData } = useMenu();
  const [profile, setProfile] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [data, setData] = useState(null);
  const companySlug = new URLSearchParams(search).get('company');
  const tableName = new URLSearchParams(search).get('table');
  // const profile = menuData?.companyDetails;
  useEffect(() => {
    createApiEndpoint(ENDPOINTS.PUBLICMENU)
      .paramsFetch({ companySlug: companySlug })
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        setMenuData(data.menuGroupItems);
        localStorage.setItem('companyId', data.companyDetails.id);
        setProfile(data.companyDetails);
      });
    // .then((response) => {
    //   const { status, data } = response;
    //   if (status === 200) {
    //     setData(data);
    //     setMenuData(data.menuGroupItems);
    //     setProfile(data.companyDetails);
    //   }
    // })
  }, []);

  const themeName = profile?.theme !== undefined && profile?.theme?.name;
  // const themeName = '1';
  switch (themeName) {
    case '1':
      return (
        <>
          <ThemeOne menuData={menuData} profile={profile} />
        </>
      );
    case '2':
      return (
        <>
          <ThemeThree menuData={menuData} profile={profile} />
        </>
      );
    case '3':
      return (
        <>
          {menuData !== null && (
            <ThemeThree menuData={menuData} profile={profile} />
          )}
        </>
      );
    default:
      return (
        <>
          <Page title='Company Menu' sx={{ backgroundColor: '#fdfdfd' }}>
            loading. . .
          </Page>
        </>
      );
  }

  // if (themeName === '1') {
  //   return (
  //     <>
  //       <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd" }}>
  //         <ThemeOne menuData={menuData} />
  //       </Page>
  //     </>
  //   )
  // }
  // else if (themeName === '2') {
  //   return (
  //     <>
  //       <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd" }}>
  //         <ThemeTwo menuData={menuData} />
  //       </Page>
  //     </>
  //   )
  // }
  // else {
  //   return (<>
  //     <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd" }}>
  //       loading. . .
  //     </Page>
  //   </>
  //   )
  // }

  // return (
  //   <h1>Menu App</h1>
  // )
}

export default Home;
