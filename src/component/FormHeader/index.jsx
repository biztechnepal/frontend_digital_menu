import {
  Box,
  IconButton,
  Grid,
  InputAdornment,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import TextFieldFilter from '../TextFieldFilter';
import { RiCloseFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';

function SearchComponent({ onChange, filterName, containerStyle }) {
  return (
    <Box p={2}>
      <div
        className=' row no-gutters align-items-center'
        style={containerStyle}
      >
        <div className='col-auto'>
          <i className='fas fa-search h4 text-body'></i>
        </div>
        <div className='col'>
          <input
            value={filterName}
            onChange={(e) => onChange(e)}
            className='form-control '
            type='text'
            placeholder='Search topics or keywords'
          />
          {/* <TextField
            variant='outlined'
            fullWidth
            size='small'
            defaultValue={filterName || ''}
            onChange={onChange}
            placeholder='Search by name...'
            InputProps={{
              endAdornment: filterName ? (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    edge='end'
                  >
                    <RiCloseFill size={22} />
                  </IconButton>
                </InputAdornment>
              ) : (
                <InputAdornment position='end'>
                  <BiSearch size={22} />
                </InputAdornment>
              ),
            }}
          /> */}
        </div>
      </div>
    </Box>
  );
}
export default React.memo(SearchComponent);
