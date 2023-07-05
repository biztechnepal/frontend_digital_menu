import { Box } from '@mui/material';
import React from 'react';
import AdvertisementHeader from '../Sticky/AdvertisementHeader';

function FooterComponent() {
  return (
    // <Box m={5} justifyContent="center" textAlign="center">
    //     <span>Digital Menu: ©</span>
    // </Box>
    <footer>
      {/* <AdvertisementHeader position='to' /> */}
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
