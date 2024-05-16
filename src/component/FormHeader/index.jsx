import { Box } from '@mui/material';
import React from 'react';

function SearchComponent({ onChange, filterName, containerStyle }) {
  return (
    <Box p={2}>
      <div className='row no-gutters align-items-center' style={containerStyle}>
        <div className='col-auto'>
          <i className='fas fa-search h4 text-body'></i>
        </div>
        <div className='col-auto' style={{ width: '100%' }}>
          <input
            value={filterName}
            onChange={(e) => onChange(e)}
            className='form-control '
            type='text'
            placeholder='Search menu by name'
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
