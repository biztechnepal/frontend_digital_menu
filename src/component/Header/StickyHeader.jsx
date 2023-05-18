import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';



const StickyNavHeader = ({ image }) => {
    // const {
    //     companyLogoPath,
    //     name,
    //     country,
    //     mobile,
    //     city,
    //     panNo,
    //     email,
    //     id,
    //     cover = "/assets/banner.png" }
    //     = profile;

    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setShowHeader(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box >
            {image !== undefined && <header
                style={{
                    // backgroundImage: `url(${image})`,
                    backgroundColor: '#f1f1f1',
                    // backgroundImage: `url('/assets/banner.png')`
                }}
                className={`sticky-header ${showHeader ? 'show' : ''}`}
            >
                <h3>Advertise Banner</h3>
            </header>}
        </Box>
    );
};

export default StickyNavHeader;