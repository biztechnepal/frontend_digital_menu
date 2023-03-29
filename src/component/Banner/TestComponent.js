import { alpha, styled } from '@mui/material/styles';
import { Box, Avatar, SpeedDial, Typography, SpeedDialAction, Stack, Card } from '@mui/material';
import Image from '../../component/Image';
import useResponsive from '../../hook/useResponsive';

const OverlayStyle = styled('h1')(({ theme }) => ({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9,
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.72),
}));

const TitleStyle = styled('h1')(({ theme }) => ({
    ...theme.typography.h2,
    top: 0,
    zIndex: 10,
    width: '100%',
    position: 'absolute',
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(10),
    },
}));

const BannerStyle = styled('div')(({ theme }) => ({
    zIndex: 10,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
        alignItems: 'center',
        paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(10),
    },
}));
const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
}));


export default function ImageComponent({ post }) {

    const MyBox = styled(Box)(({ theme }) => ({
        backgroundImage:`url("${post.cover}")` ,
        backgroundSize: 'cover',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center',
        height: '80vh',
        '&::before': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        '& .avatar': {
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
        '& .description': {
            fontSize: '1.5rem',
            textAlign: 'center',
            marginTop: theme.spacing(2),
        },
    }));

    const { cover, name, author, createdAt } = post;
    const isDesktop = useResponsive('up', 'sm');

    return (
        <>
            <MyBox>
                <Box
                    sx={{
                        position: "relative",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Avatar
                        alt="Avatar"
                        src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"
                        className="avatar"
                    />
                    <div className="description">
                        <h1>Company Name</h1>
                        <h1>Company Name</h1>

                    </div>
                </Box>
            </MyBox>
            {/* <Box sx={{ position: 'relative' }}>
                <BannerStyle>
                    <Stack >
                        <Avatar alt={author.name} src={author.avatarUrl} sx={{ width: 120, height: 120 }} />
                        <Typography variant="h6" sx={{ color: 'common.white' }}>{name}</Typography>
                    </Stack>
                </BannerStyle>
                <OverlayStyle />
                <Image alt="post cover" src={cover} ratio="21/9" />
            </Box> */}
        </>
    );
}

        //   <BannerStyle>
        //         <Box
        //             sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        //             <Stack>
        //                 <Avatar alt={author.name} src={author.avatarUrl} sx={{ width: 150, height: 150 }} />
        //                 <Box sx={{ ml: 2 }}>
        //                     <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
        //                         {name}
        //                     </Typography>
        //                 </Box>
        //             </Stack>
        //         </Box>
        //     </BannerStyle>