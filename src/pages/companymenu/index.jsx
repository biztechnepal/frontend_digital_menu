import { Box, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Page from '../../component/Page'
import Banner2 from '../../component/Header/Banner2'
// import { menuData } from '../../mockdata'
import FormHeader from '../../component/FormHeader'
import FooterComponent from '../../component/Footer'
import MenuListView from '../../component/Menu/MenuListView'
import useMenu from '../../hook/useMenu'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CompanyMenuCard from '../../component/Menu/CompanyMenuCard'
import useCompany from '../../hook/useCompany'
import PopupAdvertise from '../../component/Popup'
import StickyNavHeader from '../../component/Header/StickyHeader'
import MenuCard from '../../component/Card'

// Banner
// Category
// Search
// MenuGrid
// Footer
// http://localhost:3030/menu/?menu=company-name&&company=company-name

function CompanyMenu() {
  const [isGridView, setIsGridView] = useState(false)
  const [open, setOpen] = useState(false)
  const { getCompanyMenuOnly, loading, profile, menuData } = useMenu();
  const { search } = useLocation();
  const menuSlug = new URLSearchParams(search).get("menu");
  const companySlug = new URLSearchParams(search).get("company");

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   console.log(position)
  //   // setScrollPosition(position);
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  console.log(menuSlug , companySlug)
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            {
              profile !== null ?
                // <ImageComponent key={index} post={item} />
                // <Banner2 profile={profile} />
                <StickyNavHeader profile={profile} />
                : ''
            }
          </Grid>

          <Grid item xs={12} md={12}>
            <Box textAlign="center" >
              <Typography variant="h5" sx={{ color: 'black' }}>Our Menu</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <FormHeader isGridView={isGridView} setIsGridView={setIsGridView} />
          </Grid>
          <Grid item xs={12} md={12}>
            {isGridView && menuData?.length > 0 && (loading ? [...Array(4)] : menuData)?.map((item, index) =>
              item ?
                <React.Fragment key={index}>
                  <Stack mb={2}>
                    <Typography variant="h5">{item.name}</Typography>
                    <Divider sx={{ borderStyle: 'groove' }} />
                  </Stack>

                  <Box
                    mb={5}
                    sx={{
                      display: 'grid',
                      gap: 3,
                      gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
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

export default CompanyMenu
