import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BiFolderMinus, BiTrash } from 'react-icons/bi';
import Image from '../Image';
import { Card, Container, Grow } from '@mui/material';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function MenuListView({ menu }) {
  const { menuItemName, image, price, status, description } = menu;
  console.log(menu)

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const fontStyle = {
    fontSize: '1em',

  }
  const descriptionStyle = {
    width: "1000px",
    mt: "-10px",
    color: "#736e6e"
  }
  return (
    <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      timeout={500}
    >
      <Box sx={{ flexGrow: 1 }}>
        <List dense={dense}>
          <Grid container >
            <ListItem
              secondaryAction={
                <Typography variant='caption' sx={fontStyle}>Rs. {price}/-</Typography>
              }
            >
              <Typography variant='h6' sx={fontStyle} noWrap>{menuItemName}</Typography>
              {/* <ListItemAvatar>
                    <Avatar sx={{ borderRadius: "10%", width: 50, height: 50 }}>
                      <Image alt={name} src={image} ratio="3/4" />
                    </Avatar>
                  </ListItemAvatar> */}
              {/* <ListItemText
                    primary={name}
                    secondary={null}
                  /> */}
            </ListItem>
            <ListItem>
              <Typography variant='caption' sx={descriptionStyle} >{description}</Typography>
            </ListItem>

          </Grid>
        </List>
      </Box>
    </Grow>
  );
}