import * as React from 'react';
import { Modal, Typography, Box, Stack } from '@mui/material';
import ReactPlayer from 'react-player';
import { RxCross1 } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

export default function PopupAdvertise({ url, open, onClose, ...other }) {
  const rootRef = React.useRef(null);

  return (
    <Box
      sx={{
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
      ref={rootRef}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={open}
        onClose={onClose}
        aria-labelledby='server-modal-title'
        aria-describedby='server-modal-description'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            position: 'relative',
            // bgcolor: 'background.paper',
            // border: '1px solid #000',
            // boxShadow: (theme) => theme.shadows[5],
            m: 4,
          }}
        >
          <Box display='flex' m={2} justifyContent='center'>
            <RxCross1
              onClick={onClose}
              cursor='pointer'
              size={20}
              color='#fff'
            />
          </Box>
          <Box>
            <ReactPlayer
              width={'70%'}
              height='auto'
              style={{ margin: '0 auto' }}
              light={false}
              url={url}
              muted
              playing={false}
              controls={false}
            />
          </Box>
          {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/xPPLbEFbCAo" title="Restaurant Ad Video Template (Editable)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </Box>
      </Modal>
    </Box>
  );
}
