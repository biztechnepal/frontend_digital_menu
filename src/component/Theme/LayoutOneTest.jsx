import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FooterComponent from '../Footer'
import FormHeader from '../FormHeader'
import MenuListView from '../Menu/MenuListView'
import Page from '../Page'
import useMenu from '../../hook/useMenu'
// import { menuData } from '../../mockdata'

import { CompanyMainHeader, HeaderTitle } from '../Header'
import StickyNavHeader from '../Header/StickyHeader'
import PopupAdvertise from '../Popup'
import ViewMode from '../ViewMode'
import useAdvertise from '../../hook/useAdvertise'
import usePopups from '../../hook/usePopups'
import { ENDPOINTS } from '../../utlis/endpoints'
import { MenuGridCard } from '../Card'

// http://localhost:3000/menu/company/?menuId=6441426f234f361402ad2e7d&&companyId=643e44130a4d8d09d656d216
function LayoutOne({
  menuData
}) {
  const [menuName, setMenuName] = useState('')
  const [isGridView, setIsGridView] = useState(false)
  const [open, setOpen] = useState(false)
  const { getCompanyMenuOnly, loading,profile } = useMenu();
  const { getPopups, data: popup } = usePopups()
  const { getAdvertise, data: ads } = useAdvertise()
  const { search } = useLocation();
  const menuSlug = new URLSearchParams(search).get("menu");
  const companySlug = new URLSearchParams(search).get("company");
  const { companyDetails, menuGroupItems } = menuData !== null && menuData
  const { theme } = companyDetails !== undefined && companyDetails
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

  useEffect(() => {
    getCompanyMenuOnly({
        companyId: companySlug
    })
}, [])

  useEffect(() => {
    // setInterval(() => {
      setOpen(true)
    // }, 5000)

    // setInterval(() => {
    //   setOpen(false)
    // }, 10000)
 
  }, [])


  const dataFiltered = applySortFilter({
    data: menuGroupItems,
    name: menuName,
  });

  const handleFilter = (name) => {
    setMenuName(name)
  }

  const style = {
    // color:'#F47A00',
    color: theme?.color,
    fontFamily: theme?.font
  }

  return (<>
    <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd", fontFamily: theme?.font }}>
      {
        profile !== null && <CompanyMainHeader profile={profile} style={style} />
      }
      {
        ads?.length > 0 &&
        ads.map((item, i) => <StickyNavHeader 
        style={style} 
        image={`/assets/adss.gif`} 
        // image={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADADSFILE}/${item.id}`} 
        />
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
  const stabilizedThis = data?.menuGroupItems?.map((el, index) => [el, index]);
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