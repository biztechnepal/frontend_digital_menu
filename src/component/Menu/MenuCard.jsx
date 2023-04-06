import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, Link, Typography, Stack, Zoom, Grow } from '@mui/material';
import Label from '../Label';
import Image from '../Image';

// ----------------------------------------------------------------------

MenuCard.propTypes = {
    product: PropTypes.object,
};

export default function MenuCard({ menu }) {
    const { name, image, unit, status, description } = menu;

    //   const linkTo = PATH_DASHBOARD.menu.view(paramCase(name));
    const linkTo = '/menu/details';

    return (
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={500}
        >
            <Card sx={{ borderRadius: '2.5%', boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.2),0 22px 24px -4px rgba(145, 158, 171, 0.12)' }}>

                <Box sx={{ position: 'relative' }}>
                    {status && (
                        <Label
                            variant="filled"
                            color={(status === 'sale' && 'error') || 'info'}
                            sx={{
                                top: 16,
                                right: 16,
                                zIndex: 9,
                                position: 'absolute',
                                textTransform: 'uppercase',
                            }}
                        >
                            {status}
                        </Label>
                    )}
                    <Image alt={name} src={image} ratio="1/1" />
                </Box>

                <Stack spacing={1} sx={{ p: 2 }}>
                    <Typography variant="h6" noWrap>{name}</Typography>
                    <Typography variant="span" noWrap>{description}</Typography>

                    <Stack direction="row" alignItems="right" justifyContent="right">
                        <Stack direction="row" spacing={0.5}>
                            <Typography sx={{ fontSize: 15 }} variant="subtitle1">Rs: {unit}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Card>
        </Grow>
    );
}
