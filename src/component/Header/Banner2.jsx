import { alpha, styled } from '@mui/material/styles';
import { Box, Avatar, SpeedDial, Typography, SpeedDialAction, Stack, Card, Button, CardContent } from '@mui/material';
import Image from '../../component/Image';
import useResponsive from '../../hook/useResponsive';
import { ENDPOINTS } from '../../utlis/endpoints';

export default function Banner2({
    profile
}) {
    const {
        companyLogoPath,
        name,
        country,
        mobile,
        city,
        panNo,
        email,
        id,
        cover = "/assets/bg.jpg" }
        = profile;

    const MyBox = styled(Box)(({ theme }) => ({
        backgroundImage: `url("${cover}")`,
        backgroundSize: 'cover',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        borderRadius: "5px",
        backgroundColor: '#c8facd',
        justifyContent: 'center',
        backgroundPosition: 'center',
        height: '38vh',
        // '&::before': {
        //     content: "''",
        //     position: 'absolute',
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     bottom: 0,
        //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // },
        '& .avatar': {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        '& .description': {
            fontSize: '1.5rem',
            textAlign: 'center',
            marginTop: theme.spacing(2),
        },
    }));

    console.log(profile)
    const isDesktop = useResponsive('up', 'sm');
    const RootStyle = styled(Card)(({ theme }) => ({
        boxShadow: 'none',
        textAlign: 'center',
        backgroundColor: "#c8facd",
        [theme.breakpoints.up('md')]: {
            height: '100%',
            display: 'flex',
            textAlign: 'left',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }));
    return (
        <>
            <Box sx={{
                backgroundImage: `url("${cover}")`,
                backgroundSize: 'cover',
            }}>
                <Box
                    sx={{
                        backdropFilter: "blur(2px)",
                        position: "relative",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box p={2}>
                        <Avatar
                            sx={{ width: 120, height: 120 }}
                            alt="logo"
                            src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADCOMPANYLOGO}/${id}`}
                        />
                    </Box>
                    <Box sx={{ justifyContent: "center", textAlign: "center", borderRadius: '5px', backgroundColor: "#534f4fd6", pl: 15, pr: 15, mb: 2 }}>
                        <Typography variant="h6" sx={{ color: 'white' }}>{name}</Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>{mobile}</Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>{city}</Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>{country}</Typography>
                    </Box>
                </Box>
            </Box>

        </>
    );
}