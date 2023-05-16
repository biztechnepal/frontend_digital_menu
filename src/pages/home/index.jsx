import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material'
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
import { menuData } from '../../mockdata'
import MenuCard from '../../component/Card'
import PopupAdvertise from '../../component/Popup'
import Banner2 from '../../component/Header/Banner2'
import CompanyProfileHeader from '../../component/Header/CompanyProfileHeader'
import useScroll from '../../hook/useScroll'
import StickyNavHeader from '../../component/Header/StickyHeader'

// Banner
// Category
// Search
// MenuGrid
// Footer
// http://localhost:3000/menu/company/?menuId=6441426f234f361402ad2e7d&&companyId=643e44130a4d8d09d656d216
function Home() {
  const [isGridView, setIsGridView] = useState(false)
  const [open, setOpen] = useState(false)
  const { getCompanyMenuOnly, loading, profile } = useMenu();
  const { search } = useLocation();
  const menuSlug = new URLSearchParams(search).get("menuId");
  const companySlug = new URLSearchParams(search).get("companyId");

  // .stickyHeader{
  //   position: fixed;
  //   top:0;
  //   left:0;
  //   width: 100%;
  //   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  // }

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position)
    // setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    getCompanyMenuOnly({
      menuId: menuSlug,
      companyId: companySlug
    })
  }, [])

  useEffect(() => {
    // setInterval(() => {
    setOpen(true)
    // }, 5000)
  }, [])
  return (<>
    <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd" }}>
      <Container maxWidth="lg">
        <Grid item xs={12} md={12} >
          {
            profile !== null ?
              // <ImageComponent key={index} post={item} />
              // <Banner2 profile={profile} />
              // <CompanyProfileHeader profile={profile} />
              <StickyNavHeader profile={profile} />

              : ''
          }

          {/* 
          <Grid item xs={12} md={12}>
            <Box textAlign="center" >
              <Typography variant="h5" sx={{ color: 'black' }}>Our Menu</Typography>
            </Box>
          </Grid> */}

          <Grid item xs={12} md={12}>
            <FormHeader isGridView={isGridView} setIsGridView={setIsGridView} />
          </Grid>
          <Grid item xs={12} md={12}>
            {isGridView && menuData?.length > 0 && (loading ? [...Array(4)] : menuData)?.map((item, index) =>
              item ?
                <React.Fragment key={index}>
                  <Stack mb={1}>
                    <Typography variant="h5">{item.name}</Typography>
                  </Stack>
                  <Box
                    mb={2}
                    sx={{
                      display: 'grid',
                      gap: 2,
                      gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(1, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(2, 1fr)',
                      },
                    }}
                  >
                    {item?.menuGroupItems?.map((menuItem, i) =>
                      <MenuCard key={i} menuItemGroup={{ menuItemGroupId: item.menuItemGroupId }} menuItem={menuItem} />
                    )}
                  </Box>
                </React.Fragment>
                : '. . .'
            )}
          </Grid>

          <Grid item xs={12} md={12}>
            <Box
              sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(1, 1fr)',
                },
              }}
            >
              {!isGridView && menuData?.length > 0 && (loading ? [...Array(4)] : menuData)?.map((item, index) =>
                item ?
                  <React.Fragment key={index}>
                    <Typography variant="h5">{item.name}</Typography>
                    {item.menuGroupItems.map((menuItem, i) =>
                      <MenuListView key={index} menu={menuItem} />
                    )}
                  </React.Fragment>
                  : '. . .'
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <FooterComponent />
          </Grid>
        </Grid>
      </Container>
      <PopupAdvertise url='https://www.youtube.com/embed/xPPLbEFbCAo' open={open} onClose={() => setOpen(false)} />
    </Page>

  </>
  )
}

export default Home
