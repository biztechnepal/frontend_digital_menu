import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, Link, Typography, Stack, Grow } from '@mui/material';
import Label from '../Label';
import Image from '../Image';
import { PATH_DASHBOARD } from '../../routes/path';
import { useEffect } from 'react';
import { getMenuItemImage } from '../../services/image';
import { useState } from 'react';
import { ENDPOINTS } from '../../utlis/endpoints';


CompanyMenuCard.propTypes = {
  menuItemGroup: PropTypes.object,
  menuItem: PropTypes.object,
};

export default function CompanyMenuCard({  menuItem }) {
  const { name, unit, description, status, id } = menuItem;
  const linkTo = PATH_DASHBOARD.root;
  const imagearr = [
    "/assets/burgerbg.jpg",
    "/assets/burgerbg1.png",
    "/assets/pizza.jpg",
  ]
 
  // useEffect(async ()=>{
  //   const image =await getMenuItemImage(id)
  //   console.log('IMAGE URL',image)
  //   setImage(URL.createObjectURL(image));
  // },[])
  
  function generateRandom(maxLimit = imagearr.length) {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand); // 99
    return rand;
  }
  return (
    <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      timeout={500}
    >
      <Card sx={{ borderRadius: '2.5%', boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.2),0 22px 24px -4px rgba(145, 158, 171, 0.12)' }}>
        <Box sx={{ position: 'relative' }}>
          {status && (
            <Label
              variant="filled"
              color={(status === 'sale' && 'error') || 'info'}
              sx={{
                top: 16,
                right: 16,
                zIndex: 9,
                position: 'absolute',
                textTransform: 'uppercase',
              }}
            >
              {status}
            </Label>
          )}
          <Image alt={name} src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.MENUITEMDOWNLOADIMAGE}/${id}`} ratio="1/1" />
        </Box>

        <Stack spacing={1} sx={{ p: 2 }}>
          <Typography variant="h6" noWrap>{name}</Typography>
          <Typography variant="caption" noWrap>{description}</Typography>

          <Stack direction="row" alignItems="right" justifyContent="right">
            <Stack direction="row" spacing={0.5}>
              <Typography sx={{ fontSize: 15 }} variant="subtitle1">Rs: {unit}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Grow>
  );
}
