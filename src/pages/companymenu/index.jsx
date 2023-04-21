import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Page from '../../component/Page'
import Banner2 from '../../component/Header/Banner2'
import MenuCard from '../../component/Menu/MenuCard'
// import { menuData } from '../../mockdata'
import FormHeader from '../../component/FormHeader'
import FooterComponent from '../../component/Footer'
import MenuListView from '../../component/Menu/MenuListView'
import useMenu from '../../hook/useMenu'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CompanyMenuCard from '../../component/Menu/CompanyMenuCard'
import useCompany from '../../hook/useCompany'

// Banner
// Category
// Search
// MenuGrid
// Footer
// http://localhost:3000/menu/company/?menuId=6441426f234f361402ad2e7d&&companyId=643e44130a4d8d09d656d216
function CompanyMenu() {
  const [isGridView, setIsGridView] = useState(false)
  const { getCompanyMenuOnly, loading, menuData, profile } = useMenu();
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("menuId");
  const companyId = new URLSearchParams(search).get("companyId");
  // 6441426f234f361402ad2e7d
  useEffect( () => {
     getCompanyMenuOnly({
      menuId: id,
      companyId: companyId
    })
  }, [])
  console.log(menuData)
  console.log(profile)
  return (<>
    <Page title="Company Menu" sx={{ backgroundColor: "#fdfdfd" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            {
              profile !== null ?
                // <ImageComponent key={index} post={item} />
                <Banner2 profile={profile} />
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
                  </Stack>
                  <Box
                    mb={5}
                    sx={{
                      display: 'grid',
                      gap: 3,
                      gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        sm: 'repeat(4, 1fr)',
                        md: 'repeat(5, 1fr)',
                        lg: 'repeat(6, 1fr)',
                      },
                    }}
                  >
                    {item?.menuGroupItems?.map((menuItem, i) =>
                      <CompanyMenuCard key={i} menuItemGroup={{ menuItemGroupId: item.menuItemGroupId }} menuItem={menuItem} />
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
              {/* {
                !isGridView && menuData.length > 0 ? <>
                  <Typography sx={{ mb: 2, textAlign: "center" }} variant="h5" component="div">
                    Menu are listed below
                  </Typography>
                  {
                    menuData.map(((item, index) =>
                      <>
                        <MenuListView key={index} menu={item} /></>
                    ))
                  }
                </> : ''
              } */}
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <FooterComponent />
          </Grid>
        </Grid>
      </Container>
    </Page>
  </>
  )
}

export default CompanyMenu
