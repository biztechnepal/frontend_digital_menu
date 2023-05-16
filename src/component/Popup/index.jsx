import * as React from 'react';
import {
    Modal,
    Typography,
    Box
} from '@mui/material';
import ReactPlayer from 'react-player';

export default function PopupAdvertise({
    url,
    open,
    onClose,
    ...other
}) {
    const rootRef = React.useRef(null);

    return (
        <Box
            sx={{
                // The position fixed scoping doesn't work in IE11.
                // Disable this demo to preserve the others.
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
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                sx={{
                    display: 'flex',
                    p: 1,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
                container={() => rootRef.current}
            >
                <Box sx={{
                    position: 'relative',
                    // bgcolor: 'background.paper',
                    // border: '1px solid #000',
                    // boxShadow: (theme) => theme.shadows[5],
                    p: 4,
                }}>
                    <ReactPlayer
                        style={{ margin: "0 auto", padding: "5px" }}
                        light={true}
                        url={url}
                        muted={false}
                        playing
                        controls={true} />
                    {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/xPPLbEFbCAo" title="Restaurant Ad Video Template (Editable)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                </Box>
            </Modal>
        </Box>
    );
}