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
    filter,
    onHandleChange
  } = props;

  return (
    <TextField
      variant='outlined'
      fullWidth
      value={filter}
      onChange={(event) => onHandleChange(event.target.value)}
      placeholder="Search by name..."
      InputProps={{
        endAdornment:
        filter ?
            (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => onHandleChange()}
                  edge="end"
                >
                  <RiCloseFill size={22} />

                </IconButton>
              </InputAdornment>
            ) : <InputAdornment position="end"><BiSearch size={22} /></InputAdornment>
      }}
    />
  )
}
