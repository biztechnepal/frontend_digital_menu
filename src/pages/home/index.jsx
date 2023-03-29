import { Box, Card, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Page from '../../component/Page'
import ImageComponent from '../../component/Banner'
import Banner2 from '../../component/Banner/Banner2'
import MenuCard from '../../component/Menu/MenuCard'
import { menuData } from '../../mockdata'
import FormHeader from '../../component/FormHeader'
import FooterComponent from '../../component/Footer'
// import { ViewContext } from '../../contexts/ViewContext'

// Banner
// Category
// Search
// MenuGrid
// Footer
function Home() {
  // const [isGridView, setIsGridView] = useContext(ViewContext)

  const companyData = [
    {
      name: "Company Name",
      city: 'Kathmandu',
      country: "Nepal",
      mobile: "98414454478, 98454488878",
      id: "123456789",
      cover: "/assets/bg.jpg",
      description: "test",
      author: {
        name: "Jayvion Simon",
        logo: "/assets/logo1.png"
      }
    },
  ]
  return (<>
    <Page title="Company Banner">
      <Container maxWidth="xl">
        {
          companyData.length > 0 ? companyData.map(((item, index) =>
            // <ImageComponent key={index} post={item} />
            <Banner2 key={index} post={item} />
          )) : ''
        }

        <Box textAlign="center" m={2}>
          <Typography variant="h4" sx={{ color: 'black' }}>Our Menu</Typography>
        </Box>

        <FormHeader />

        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {
            menuData.length > 0 ? menuData.map(((item, index) =>

              <MenuCard key={index} menu={item} />
            )) : ''
          }
        </Box>
        <FooterComponent />
      </Container>
    </Page>
  </>
  )
}

export default Home
