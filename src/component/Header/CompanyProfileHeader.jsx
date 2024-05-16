import { styled } from '@mui/material/styles';
import { Typography, Box, Card, CardContent, Avatar } from '@mui/material';
import Image from '../Image';
import ProfileDetails from './ProfileDetails';
import { ENDPOINTS } from '../../utlis/endpoints';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    backgroundColor: '#C8FACD',
    [theme.breakpoints.up('md')]: {
        height: '100%',
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));
export default function CompanyProfileHeader({
    profile
}) {
    const {
        id,
        cover = "/assets/banner.png" }
        = profile;
    return (
        <>
            <RootStyle>
                <Box p={2} sx={{
                    display: 'flex', justifyContent: 'center',
                }}>
                    <Avatar
                        sx={{ width: 120, height: 120, backgroundColor: "white" }}
                        alt="logo"
                        src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.DOWNLOADCOMPANYLOGO}/${id}`}
                    />
                </Box>
                <CardContent
                    sx={{
                        color: 'grey.800',
                    }}
                >
                    <Typography gutterBottom variant="h4">
                       Our Menu
                    </Typography>


                </CardContent>
                <ProfileDetails profile={profile} />
            </RootStyle>
        </>
    );
}