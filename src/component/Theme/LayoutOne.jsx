import { Box, Card, Container, Grid, Grow, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Page from '../../component/Page'
import FormHeader from '../../component/FormHeader'
import FooterComponent from '../../component/Footer'
import MenuListView from '../../component/Menu/MenuListView'
import useMenu from '../../hook/useMenu'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CompanyMenuCard from '../../component/Menu/CompanyMenuCard'
import useCompany from '../../hook/useCompany'
// import { menuData } from '../../mockdata'

import PopupAdvertise from '../../component/Popup'
import { CompanyMainHeader, HeaderTitle } from '../../component/Header'
import ViewMode from '../../component/ViewMode'
import usePopups from '../../hook/usePopups'
import { ENDPOINTS } from '../../utlis/endpoints'
import StickyNavHeader from '../../component/Header/StickyHeader'
import useAdvertise from '../../hook/useAdvertise'
import { MenuGridCard } from '../Card'

// http://localhost:3000/menu/company/?menuId=6441426f234f361402ad2e7d&&companyId=643e44130a4d8d09d656d216
function LayoutOne({
  menuData,
  profile
}) {
  const [menuName, setMenuName] = useState('')
  const [isGridView, setIsGridView] = useState(false)
  const [open, setOpen] = useState(false)
  const { getCompanyMenuOnly, loading } = useMenu();
  const { getPopups, data: popup } = usePopups()
  const { getAdvertise, data: ads } = useAdvertise()
  const { search } = useLocation();
  const menuSlug = new URLSearchParams(search).get("menu");
  const companySlug = new URLSearchParams(search).get("company");
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   // setScrollPosition(position);
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    getPopups()
    getAdvertise()
  }, [])

  // useEffect( () => {
  //  getCompanyMenuOnly({
  //     menuId: menuSlug,
  //     companyId: companySlug
  //   })
  // }, [])

  useEffect(() => {
    // setInterval(() => {
      setOpen(true)
    // }, 5000)

    // setInterval(() => {
    //   setOpen(false)
    // }, 10000)
 
  }, [])


  const dataFiltered = applySortFilter({
    data: menuData,
    name: menuName,
  });

  const handleFilter = (name) => {
    setMenuName(name)
  }

  const style = {
    // color:'#F47A00',
    color: profile?.theme?.color,
    fontFamily: profile?.theme?.font
  }

  return (<>
    <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd", fontFamily: profile?.theme?.font }}>
      {
        profile !== null && <CompanyMainHeader profile={profile} style={style} />
      }
      {
        ads?.length > 0 &&
        ads.map((item, i) => <StickyNavHeader image={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADADSFILE}/${item.id}`} />
        )}

      <HeaderTitle title='Our Menu' style={style} />

      <FormHeader onHandleChange={handleFilter} filterName={menuName} />

      <ViewMode isGridView={isGridView} setIsGridView={setIsGridView} style={style} />

      {isGridView && dataFiltered?.length > 0 && dataFiltered?.map((menuItem, index) =>
        <React.Fragment>
          <MenuGridCard
            isGridView={isGridView}
            key={index}
            menuItem={menuItem}
            style={style}
          />
        </React.Fragment>)
      }
      {
        !isGridView && dataFiltered?.length > 0 && dataFiltered?.map((menuItem, index) =>
          <React.Fragment>
            <MenuListView
              isGridView={false}
              key={index}
              menuItem={menuItem}
              style={style}

            />
          </React.Fragment>
        )
      }

      <FooterComponent />
      {
        open && popup?.length > 0 &&
        popup.map((item, i) => <PopupAdvertise key={i} url={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADPOPUPSFILE}/${item.id}`} open={open} onClose={() => setOpen(false)} />)
      }
    </Page>

  </>
  )
}

function applySortFilter({ data, name }) {
  console.log('TABLE DATA', data)
  const stabilizedThis = data?.map((el, index) => [el, index]);
  // data = stabilizedThis?.map((el) => el[0]);

  if (name) {
    data = data.filter((item) => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }

  return data;
}


// export function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }
// export function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

export default LayoutOne