import { Box } from '@mui/material';
import React from 'react';
import AdvertisementHeader from '../Sticky/AdvertisementHeader';
import { ENDPOINTS } from '../../utlis/endpoints';

function FooterComponent({ ads, profile }) {
  return (
    // <Box m={5} justifyContent="center" textAlign="center">
    //     <span>Digital Menu: ©</span>
    // </Box>
    <footer>
      {ads?.length > 0 &&
        ads.map((item, i) => (
          <AdvertisementHeader
            link={item.adUrl}
            url={`${import.meta.env.VITE_APP_HOST_API_KEY}/${
              ENDPOINTS.DOWNLOADADSFILE
            }/${item.id}`}
            position={profile?.theme?.advertisementPlacement}
          />
        ))}
      <div className='row'>
        <div
          className='col-lg-12'
          style={{ textAlign: 'center', marginTop: '20px' }}
        >
          <p>Digital Menu: ©</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
