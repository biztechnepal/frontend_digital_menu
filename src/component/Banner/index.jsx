import { alpha, styled } from '@mui/material/styles';
import { Box, Avatar, SpeedDial, Typography, SpeedDialAction, Stack, Card, Button, CardContent } from '@mui/material';
import Image from '../../component/Image';
import useResponsive from '../../hook/useResponsive';

export default function ImageComponent({ post }) {

    const MyBox = styled(Box)(({ theme }) => ({
        // backgroundImage: `url("${post.cover}")`,
        backgroundSize: 'cover',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        backgroundColor:'#c8facd',
        justifyContent: 'center',
        backgroundPosition: 'center',
        height: '30vh',
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
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
        '& .description': {
            fontSize: '1.5rem',
            textAlign: 'center',
            marginTop: theme.spacing(2),
        },
    }));

    const { cover, name, country, city, author, createdAt } = post;
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
                    <Box p={3}>
                        <Stack direction="row" spacing={2}>
                            <Avatar
                                sx={{ width: 120, height: 120 }}
                                alt="Avatar"
                                src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"
                                className="avatar"
                            />
                            <Stack>
                                <Typography variant="h5" sx={{ color: 'black' }}>{name}</Typography>
                                <Typography variant="body2" sx={{ float: 'left', color: 'black' }}>{city}</Typography>
                                <Typography variant="body2" sx={{ float: 'left', color: 'black' }}>{country}</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </MyBox>
            {/* <MyBox>
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
                    <Stack>
                        <Typography variant="h4" sx={{ color: 'common.white' }}>{name}</Typography>
                        <Typography variant="h6" sx={{float:'left', color: 'common.white' }}>{city}</Typography>
                        <Typography variant="h6" sx={{float:'left', color: 'common.white' }}>{country}</Typography>
                    </Stack>
                </Box>
            </MyBox> */}
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
              {/* <RootStyle>
                <CardContent
                    sx={{
                        color: 'grey.800',
                        p: { md: 0 },
                        pl: { md: 5 }
                    }}
                >
                    <Typography gutterBottom variant="h4">
                        Congratulations,
                        <br /> Fabiana Capmany!
                    </Typography>

                    <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
                        Best seller of the month You have done 57.6% more sales today.
                    </Typography>

                    <Button variant="contained">Go Now</Button>
                </CardContent>
            </RootStyle> */}
        </>
    );
}