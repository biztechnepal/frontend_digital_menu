import React from 'react'
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { RiCloseFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';

export default function TextFieldFilter(props) {
  const {
    label,
    filter,
    setfilter
  } = props;

  return (

    <TextField
      variant='outlined'
      size="small"
      fullWidth
      // label={label}
      // value={filter}
      onChange={(e) => setfilter(e.target.value)}
      InputProps={{
        endAdornment:
          filter ?
          (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  setfilter("")
                }}
                edge="end"
              >
                <RiCloseFill size={22} />

              </IconButton>
            </InputAdornment>
          ):<InputAdornment position="end"><BiSearch size={22} /></InputAdornment>
      }}
      {...props}
    />
  )
}
