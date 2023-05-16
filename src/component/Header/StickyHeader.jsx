import React from 'react';
import { AppBar, Avatar, Box, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { ENDPOINTS } from '../../utlis/endpoints';
import useScroll from '../../hook/useScroll';


const StickyNavHeader = ({ profile }) => {
    const isMobile = useMediaQuery((theme) => 'sm');
    const scrolled = useScroll()
    const StyledAppBar = styled(AppBar)(({ theme }) => ({
        color: '#000',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        width: '60%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        top: '0',
        position: 'fixed',
        // backgroundColor: '#C8FACD',
        backgroundImage: `url(/assets/ads.gif)`,
        // backgroundImage:`url(${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADCOMPANYLOGO}/${id})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',

    }));

    const StyledContent = styled(Box)(({ theme }) => ({
        width: '100%',
        borderButtomLeftRadius: '5px',
        borderButtomRightRadius: '5px',
        backgroundColor: '#C8FACD',
        marginTop: scrolled ? theme.spacing(8) : theme.spacing(0), // Adjust the margin as per your requirement
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(6),
        },
    }));
    const {
        companyLogoPath,
        name,
        country,
        mobile,
        city,
        panNo,
        email,
        id,
        cover = "/assets/banner.png" }
        = profile;
    return (
        <Box >
            {/* {
                scrolled &&
                <StyledAppBar>
                    <Toolbar>
                    <Image src={`/assets/ads.gif`} ratio="1/1" />
                    </Toolbar>
                </StyledAppBar>
            } */}
            <StyledContent>
                <Box
                    sx={{
                        backdropFilter: "blur(2.5px)",
                        position: "relative",
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box p={2}>
                        <Avatar
                            sx={{ width: 120, height: 120, backgroundColor: "white" }}
                            alt="logo"
                            src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADCOMPANYLOGO}/${id}`}
                        />
                    </Box>
                </Box>
                <Box sx={{ justifyContent: "center", textAlign: "center", borderRadius: '5px', backgroundColor: "#534f4fd6", pl: 15, pr: 15, mb: 2 }}>
                    <Typography variant="h6" sx={{ color: 'white' }}>{name}</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>{mobile}</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>{city}</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>{country}</Typography>
                </Box>
            </StyledContent>
        </Box>
    );
};

export default StickyNavHeader;