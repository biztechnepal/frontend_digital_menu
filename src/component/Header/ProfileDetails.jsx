import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Card, Typography, CardHeader, Stack, Box } from '@mui/material';
// components
// import Iconify from '../../../../components/Iconify';
import { MdContacts } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { BsMailbox2 } from 'react-icons/bs'
// ----------------------------------------------------------------------

// const IconStyle = styled(Iconify)(({ theme }) => ({
//   width: 20,
//   height: 20,
//   marginTop: 1,
//   flexShrink: 0,
//   marginRight: theme.spacing(2),
// }));

// ----------------------------------------------------------------------

ProfileDetails.propTypes = {
    profile: PropTypes.object,
};

export default function ProfileDetails({ profile }) {
    const { name, country, city, address, mobile, email, username } = profile;

    return (
        <Card sx={{
            boxShadow: 'none',
            m: {
                sx: 1,
                sm: 0,
                md: 1
            },
            width: {
                sx: 1.0,
                sm: '100%',
                md: 350,
            },
        }}>
            <Stack p={3} spacing={2}>
                <CardHeader title={name} />
                <Stack spacing={1} direction="row">
                    <MdLocationOn />
                    <Typography variant="inherit">
                        {address}, {country} {city} &nbsp;
                    </Typography>
                </Stack>

                <Stack spacing={1} direction="row">
                    <BsMailbox2 />
                    <Typography variant="inherit">{email}</Typography>
                </Stack>

                <Stack spacing={1} direction="row">
                    <MdContacts />
                    <Typography variant="inherit">
                        {mobile}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    );
}
