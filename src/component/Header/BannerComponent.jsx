import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Card, Avatar, Typography, CardContent, Stack } from '@mui/material';
import Image from '../Image';
import useResponsive from '../../hook/useResponsive';

const OverlayStyle = styled('div')(({ theme }) => ({
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.8),
}));

BannerComponent.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number,
};

export default function BannerComponent({ post, index }) {
    const isDesktop = useResponsive('up', 'md');

    const { cover, title, author } = post;

    const latestPost = index === 0 || index === 1 || index === 2;

    if (isDesktop && latestPost) {
        return (
            <Card>
                <Avatar
                    alt={author.name}
                    src={author.avatarUrl}
                    sx={{
                        zIndex: 9,
                        top: 24,
                        left: 24,
                        width: 40,
                        height: 40,
                        position: 'absolute',
                    }}
                />
                <BannerContent title={title} index={index} />
                <OverlayStyle />
                <Image alt="cover" src={cover} sx={{ height: 360 }} />
            </Card>
        );
    }

    return (
        <Card>
            <Box sx={{ position: 'relative' }}>
                <Avatar
                    alt={author.name}
                    src={author.avatarUrl}
                    sx={{
                        left: 24,
                        zIndex: 9,
                        width: 32,
                        height: 32,
                        bottom: -16,
                        position: 'absolute',
                    }}
                />
                <Image alt="cover" src={cover} ratio="4/3" />
            </Box>

            <BannerContent title={title} />
        </Card>
    );
}

// ----------------------------------------------------------------------

BannerContent.propTypes = {
    comment: PropTypes.number,
    createdAt: PropTypes.string,
    index: PropTypes.number,
    share: PropTypes.number,
    title: PropTypes.string,
    view: PropTypes.number,
};

export function BannerContent({ title, index }) {
    const isDesktop = useResponsive('up', 'md');


    const latestPostLarge = index === 0;
    const latestPostSmall = index === 1 || index === 2;

    return (
        <CardContent
            sx={{
                pt: 4.5,
                width: 1,
                ...((latestPostLarge || latestPostSmall) && {
                    pt: 0,
                    zIndex: 9,
                    bottom: 0,
                    position: 'absolute',
                    color: 'common.white',
                }),
            }}
        >
            {/* 
            <TextMaxLine variant={isDesktop && latestPostLarge ? 'h5' : 'subtitle2'} line={2} persistent>
                {title}
            </TextMaxLine> */}
            <Stack
                flexWrap="wrap"
                direction="row"
                justifyContent="flex-end"
                sx={{
                    mt: 3,
                    color: 'text.disabled',
                    ...((latestPostLarge || latestPostSmall) && {
                        opacity: 0.64,
                        color: 'common.white',
                    }),
                }}
            >

            </Stack>
        </CardContent>
    );
}
